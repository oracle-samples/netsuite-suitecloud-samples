import CounterApp from './CounterApp.js';

export const run = (context) => {
	context.setLayout('application');
	context.setContent(<CounterApp />);
};
