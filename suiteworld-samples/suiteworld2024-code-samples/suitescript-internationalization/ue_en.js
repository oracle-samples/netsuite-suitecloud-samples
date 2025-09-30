/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define([ 'N/record', 
    'N/runtime', 
    'N/translation', 
    'N/format', 
    'N/log',
    'N/format/i18n',
    'N/config'], 
function(record, 
        runtime, 
        translation, 
        format, 
        log,
        formatterFactory, 
        config) 
{
function extractCompanyPhoneAndCountry() {
    // Extract the company main address
    var generalCompanyInformation = config.load({type: config.Type.COMPANY_INFORMATION});
    var mainAddress = generalCompanyInformation.getSubrecord({fieldId: 'mainaddress'});
    var phone = mainAddress.getValue({fieldId: 'addrphone'});
    var country = mainAddress.getValue({fieldId: 'country'});

    log.debug({title: 'extractcompanyinfo', details: 'phone: ' + phone + ', country: ' + country});

    return {
        phone: formatterFactory.getPhoneNumberParser({}).parse({number: phone}), 
        country: country 
    };
}

function getPhoneNumberFormatterType(customerCountries, companyCountry) {
    if (customerCountries.length == 1 && companyCountry == customerCountries[0])
        return formatterFactory.PhoneNumberFormatType.NATIONAL;

    return formatterFactory.PhoneNumberFormatType.INTERNATIONAL;
}

function extractEmployeeName(scriptContext) {
    var employeeRecord = record.load({type: record.Type.EMPLOYEE, id: scriptContext.newRecord.id, isDynamic: true});

    var employeeName = employeeRecord.getValue({fieldId: 'firstname'}) + " " + employeeRecord.getValue({fieldId: 'lastname'});

    return employeeName;
}

function beforeLoad(scriptContext) {
    var currentUserID = runtime.getCurrentUser().id;        
    if ((runtime.executionContext === runtime.ContextType.USER_INTERFACE) && (scriptContext.type === scriptContext.UserEventType.VIEW)) {
        var strings = translation.load({
            collections: [{
                alias: 'suiteWorldStrings',
                collection: 'custcollection_i18ndemo',
                keys: ['bonus_email', 'email_content'],
                locales: ['en_US']
            }]
        });			            

        var companyCredentials = extractCompanyPhoneAndCountry();

        var phoneNumberFormatter = formatterFactory.getPhoneNumberFormatter({
            formatType: getPhoneNumberFormatterType('us', companyCredentials.country)
        });

        var formattedPhoneNumber = phoneNumberFormatter.format({
            number: companyCredentials.phone
        });

        var formattedToday = format.format( { value: new Date(), type: format.Type.DATE } ); 

        var sampleTab = scriptContext.form.addTab({
            id: 'custpage_loc_hints',
            label: strings.suiteWorldStrings.BONUS_EMAIL()
        });

        var inlineHtml = scriptContext.form.addField({
            id: 'custpage_inline_html',
            type: 'inlinehtml',
            label: 'Email to customer',
            container: 'custpage_loc_hints'
        });
        var money = "1000";
        inlineHtml.defaultValue = '<textarea rows="8" cols="150" wrap="hard" readonly>' + strings.suiteWorldStrings.EMAIL_CONTENT({params: [extractEmployeeName(scriptContext), formattedPhoneNumber, money]}) + '</textarea>';
    }
}

return {
    beforeLoad: beforeLoad
};
});