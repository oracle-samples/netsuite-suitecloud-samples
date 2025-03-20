import {ContentPanel, Heading, ThemeSelector} from '@uif-js/component';
import {Theme} from '@uif-js/core';

export default function HelloWorld() {
	return (
		<ThemeSelector supportedThemes={[Theme.Name.REDWOOD, Theme.Name.REFRESHED]}>
			<ContentPanel
				horizontalAlignment={ContentPanel.HorizontalAlignment.CENTER}
				verticalAlignment={ContentPanel.VerticalAlignment.CENTER}
			>
				<Heading>Hello World!</Heading>
			</ContentPanel>
		</ThemeSelector>
	);
}
