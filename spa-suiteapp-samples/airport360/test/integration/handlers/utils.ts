export function withSuiteQlQuery(expectedQuery, resolver) {
	return async (args) => {
		const {request} = args;

		// Ignore requests that have a non-JSON body.
		const contentType = request.headers.get('Content-Type') || '';
		if (!contentType.includes('application/json')) {
			return;
		}

		// Clone the request and read it as JSON. Otherwise it won't be available in the resolver.
		const actualBody = await request.clone().json();

		if (actualBody.q !== expectedQuery) return;

		return resolver(args);
	};
}
