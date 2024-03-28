import CountriesApp from './CountriesApp.js';

export const run = (context) => {
	context.setLayout('application');
	context.setContent(<CountriesApp />);
};
