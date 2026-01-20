export function handleTestResultAndErrors(callResult) {
	let callResultObject = callResult;
	if(typeof callResult === 'string' || callResult instanceof String){
		callResultObject = JSON.parse(callResult);
	} 
	if (callResultObject.error) {
		throw new Error("Error in the execution of the test: " + callResult.error);
	}
	if (callResultObject.status == "error") {
		throw new Error("Error in the execution of the test: " + callResult.message);
	}
	if (log.error.mock.calls.length) {
		throw new Error("Error in the execution of the test: " + log.error.mock.calls);
	}
	return callResultObject;
}