import HelloWorld from './HelloWorld.js';

export const run = (context) => {
	context.setLayout('application'); // Make the application fill the entire viewport
	context.setContent(<HelloWorld />);
};
