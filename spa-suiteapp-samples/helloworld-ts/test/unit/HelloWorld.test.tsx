import {expect, test} from '@jest/globals';
import {ContentPanel, Heading, ThemeSelector} from '@uif-js/component';
import HelloWorld from '../../src/SuiteApps/com.netsuite.uifhwts/helloworld/HelloWorld';

describe('App Components', () => {
	test('component HelloWorld renders a Heading inside a ContentPanel, all wrapped in ThemeSelector', () => {
		const root = HelloWorld();

		expect(root.type).toBe(ThemeSelector);

		const rootChild = root.props.children;

		expect(rootChild.type).toBe(ContentPanel);

		const content = rootChild.props.children;

		expect(content.type).toBe(Heading);
		expect(content.props.children).toBe('Hello World!');
	});
});
