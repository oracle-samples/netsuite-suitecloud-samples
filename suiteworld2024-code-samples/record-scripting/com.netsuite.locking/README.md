## Overview
An example of dealing with concurrent record modification problem using a simple tracking mechanism 
and user notification implemented using only user event scripts.

Tracking Management: 
* The script manages a custom tracking mechanism to prevent multiple users from editing the same record simultaneously.

User Notifications: 
* It provides warnings to users if a record is being edited by someone else.

Automatic Tracking Updates: 
* It updates or creates tracking records as needed to provide users with information about the currently opened edit sessions.

## Detailed Script Breakdown - beforeLoad

### Check Event Type:
If the event type is `CREATE`, the function returns immediately.

    if (scriptContext.type === scriptContext.UserEventType.CREATE) {
        return;
    }

### Get Current User and Time:
Retrieves the current user and the current timestamp.

    const user = runtime.getCurrentUser();
    const timeNow = Date.now();

### Generate Tag:
Creates a `tag` combining the record type, user email, and current timestamp.

    const tag = scriptContext.newRecord.type + "#" + user.email + "#" + timeNow;

### Check Tracking Record Text:
Retrieves the text from the `custbody_lock` field. If it’s empty, the function returns.

    const lockText = scriptContext.newRecord.getText({ fieldId: "custbody_lock" });
    if (!lockText) {
        return;
    }

### Parse Tracking Record Text:
Splits the tracking information text into `openedBy` and `openedSince`.

    const [recordType, openedBy, openedSince] = lockText.split("#");

### Check Tracking Record Conditions:
If the tracking text is not `LOCK.OPEN` and the record is opened by another user, or if the record has been opened for less than a day, a warning message is shown.
If the current time is greater than `openedSince`, the tracking record is updated with the new `tag`.

    if ((lockText !== LOCK.OPEN && openedBy !== user.email) || ((timeNow - openedSince) < ONE_DAY_IN_MS)) {
        message.create({
            title: "This record is being edited by somebody else",
            message: `email: ${openedBy}, since: ${new Date(parseInt(openedSince))}`,
            type: message.Type.WARNING
        }).show({ sendToClient: true });
    }
    else if (timeNow > openedSince) {
        record.submitFields({
            type: "customrecord_lock",
            id: scriptContext.newRecord.getValue({ fieldId: "custbody_lock" }),
            values: {
                name: tag,
            }
        });
    }

## Detailed Script Breakdown - beforeSubmit

### Check Event Type:
If the event type is `DELETE`, the function returns immediately.

    if (scriptContext.type === scriptContext.UserEventType.DELETE) {
        return;
    }

### Get Tracking Record ID:
Retrieves the tracking record ID from the `custbody_lock` field.

    const lockId = scriptContext.newRecord.getValue({
    fieldId: "custbody_lock"
    });

### Create or Update Tracking Record:
* If there is a tracking ID, the tracking record is updated to `LOCK.OPEN`.
* If there is no tracking ID, a new tracking record is created with the name `LOCK.OPEN`, and the ID is saved to the `custbody_lock` field.


    if (lockId > 0) {
        record.submitFields({
            type: "customrecord_lock",
            id: lockId,
            values: {
                name: LOCK.OPEN,
            }
        });
    }
    else {
        const lockRecord = record.create({
            type: "customrecord_lock",
        });
        lockRecord.setValue({
            fieldId: "name",
            value: LOCK.OPEN,
        });
        const id = lockRecord.save();
    
        scriptContext.newRecord.setValue({
            fieldId: "custbody_lock",
            value: id
        });
    }

_Note: submitFields function is generally more performant updating custom records compared to standard record service._