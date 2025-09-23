/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define([ 'N/record', 
    'N/runtime', 
    'N/translation', 
    'N/format/i18n',
    'N/config'], 
function(record, 
        runtime, 
        translation, 
        formatterFactory,
        config) 
{
function _extractCompanyPhoneAndCountry() {
    // Extract the company main address
    var generalCompanyInformation = config.load({type: config.Type.COMPANY_INFORMATION});
    var mainAddress = generalCompanyInformation.getSubrecord({fieldId: 'mainaddress'});
    var phone = mainAddress.getValue({fieldId: 'addrphone'});
    var country = mainAddress.getValue({fieldId: 'country'});

    return {
        phone: formatterFactory.getPhoneNumberParser({}).parse({number: phone}),
        country: country
    };
}

function _getPhoneNumberFormatterType(customerCountries, companyCountry) {
    if (customerCountries.length == 1 && companyCountry == customerCountries[0])
        return formatterFactory.PhoneNumberFormatType.NATIONAL;

    return formatterFactory.PhoneNumberFormatType.INTERNATIONAL;
}

function _extractEmployeeName(scriptContext) {
    var employeeRecord = record.load({type: record.Type.EMPLOYEE, id: scriptContext.newRecord.id, isDynamic: true});

    var employeeName = employeeRecord.getValue({fieldId: 'firstname'}) + " " + employeeRecord.getValue({fieldId: 'lastname'});

    return employeeName;
}

function _addTabWithEmail(locale, scriptContext) {
    var strings = translation.load({
        collections: [{
            alias: 'suiteWorldStrings',
            collection: 'custcollection_i18ndemo',
            keys: ['email_content'],
            locales: [locale]
        }]
    });											            

    var companyCredentials = _extractCompanyPhoneAndCountry();

    var phoneNumberFormatter = formatterFactory.getPhoneNumberFormatter({
        formatType: _getPhoneNumberFormatterType('us', companyCredentials.country)
    });

    var formattedPhoneNumber = phoneNumberFormatter.format({
        number: companyCredentials.phone
    });    			

    var sampleTab = scriptContext.form.addTab({
        id: 'custpage_loc_hints',
        label: 'bonus email'
    });

    var inlineHtml = scriptContext.form.addField({
        id: 'custpage_inline_html',
        type: 'inlinehtml',
        label: 'Email to customer',
        container: 'custpage_loc_hints'
    });
    var money = "1000";
    inlineHtml.defaultValue = '<textarea rows="8" cols="150" wrap="hard" readonly>' + 
        strings.suiteWorldStrings.EMAIL_CONTENT({params: [
            _extractEmployeeName(scriptContext), 
            formattedPhoneNumber, 
            money]}) + 
        '</textarea>';
}

function beforeLoad(scriptContext) {
    var currentUserID = runtime.getCurrentUser().id;        
    if ((runtime.executionContext === runtime.ContextType.USER_INTERFACE) && (scriptContext.type === scriptContext.UserEventType.VIEW)) {
        _addTabWithEmail('en_US', scriptContext);
    }
}

return {
    beforeLoad: beforeLoad
};
}
);
