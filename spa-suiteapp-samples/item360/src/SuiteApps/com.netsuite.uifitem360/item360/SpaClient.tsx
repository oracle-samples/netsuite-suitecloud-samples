import Item360 from './Item360';

export const run = (context) => {
	context.setLayout('application'); // Make the application fill the entire viewport
	context.setContent(<Item360 />);
};
