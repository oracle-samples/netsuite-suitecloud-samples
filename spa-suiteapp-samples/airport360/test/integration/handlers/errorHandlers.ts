import {http, HttpResponse} from 'msw';

export const errorHandlers = [
	http.post('http://localhost.com/services/rest/query/v1/suiteql', () => {
		return HttpResponse.error();
	}),
];
