## Overview
The purpose of this script is to default certain field values on a new record when it is being created through a specific process (indicated by a `fromWizard` parameter).

This script customizes the creation of a new record by:
* Ensuring it only runs during the creation process.
* Checking if the record is being created from a specific wizard.
* Working with record supported default values - `entity` 
* Setting the `salesrep` field based on the customer using query API.
* Setting the `leadsource` field based on a request parameter.

This approach helps automate and streamline the record creation process, ensuring that necessary fields are populated correctly based on the context of the creation.

A simple example of a redirect call from a wizard Suitelet:

    ...
    const domain = url.resolveDomain({hostType: url.HostType.APPLICATION});
    const path = url.resolveRecord({recordType: "salesorder"});
    const soUrl = url.format({domain: `https://${domain}${path}`, params: {
        fromWizard: "T",
        entity: 107
    }});
    redirect.redirect({url: soUrl});


## Detailed Script Breakdown
### Check Event Type:
This line checks if the event type is not `CREATE`. If it’s not, the script exits early. This ensures the script only runs when a new record is being created.

    if (scriptContext.type !== scriptContext.UserEventType.CREATE) {
        return;
    }

### Check Request Parameters:
This condition checks if the request object exists and if the fromWizard parameter is set to `‘T’` (true). This indicates that the record is being created from a specific wizard or process.

    if (scriptContext.request && scriptContext.request.parameters.fromWizard == 'T') {
    
### Retrieve Customer Value:
This line retrieves the value of the `entity` field (i.e. customer) from the new record being created.

    const customer = scriptContext.newRecord.getValue({fieldId: "entity"});

### Search for Sales Representative:
The doSearchSalesRepForCustomer function is using query API to find the sales representative associated with the customer. The result is then set in the `salesrep` field of the new record.

    const salesRep = doSearchSalesRepForCustomer(customer);
    scriptContext.newRecord.setValue({fieldId: "salesrep", value: salesRep});

### Set Lead Source:
The `leadsource` parameter from the request is retrieved and set in the `leadsource` field of the new record.

    const leadSource = scriptContext.request.parameters.leadsource;
    scriptContext.newRecord.setValue({fieldId: "leadsource", value: leadSource});

