// Root Application routes
const RootRoute = {
	DASHBOARD: '/', // default route
	COUNTRIES: '/countries',
	COUNTRY: '/countries/:countryCode', // route with 'countryCode' parameter - e.g. '/countries/usa'
	LISTS: '/lists', // index page '/lists'
	OTHERS: '*', // route that matches everything - used for 404 Page
};

// Nested List route
const ListRoute = {
	POPULATION: '/population', // nested route '/lists/population'
	AREA: '/area', // nested route '/lists/area'
};

export {RootRoute, ListRoute};
