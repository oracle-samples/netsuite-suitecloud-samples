## Overview
Simple example of dynamic access control and redirect functionality implemented using a beforeLoad user event script on an employee record.

This script ensures that when a record is being viewed or edited and the current user’s ID does not match the opened record’s ID, the user is redirected to a specific Suitelet.
The Suitelet receives the recordUserName and UserEventType as parameters, allowing for further custom processing.

## Detailed Script Breakdown

### Check Event Type:
This condition checks if the event type is not `CREATE`. If the record is not being created, the script proceeds to the next condition.

    if (scriptContext.type !== scriptContext.UserEventType.CREATE) {

### Check User ID:
This condition checks if the current user’s ID (obtained from runtime module) is not the same as the ID of the new record. 
If they are different, the script proceeds to the redirect.

    if (runtime.getCurrentUser().id !== scriptContext.newRecord.id) {

### Redirect to Suitelet:
This block redirects the current user to a Suitelet with the specified `scriptId` and `deploymentId`. 
It also passes two `parameters`:
* `recordUserName`: The `entityid` value of the new record.
* `UserEventType`: The type of user event (e.g., `CREATE`, `EDIT`).


    redirect.toSuitelet({
        scriptId: 806,
        deploymentId: 1,
        parameters: {
            "recordUserName": scriptContext.newRecord.getValue("entityid"),
            "UserEventType": scriptContext.type,
        }
    });

