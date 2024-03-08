import {ContentPanel, Heading} from '@uif-js/component';

export default function HelloWorld() {
	return (
		<ContentPanel
			horizontalAlignment={ContentPanel.HorizontalAlignment.CENTER}
			verticalAlignment={ContentPanel.VerticalAlignment.CENTER}
		>
			<Heading>Hello World!</Heading>
		</ContentPanel>
	);
}
