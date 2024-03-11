import {expect, test} from '@jest/globals';
import {ContentPanel, Heading} from '@uif-js/component';
import HelloWorld from '../../src/SuiteApps/com.netsuite.uifhwjs/helloworld/HelloWorld';

test('HelloWorld renders a Heading inside a ContentPanel', () => {
	const foo = HelloWorld();
	expect(foo.type).toBe(ContentPanel);
	expect(foo.props.children.type).toBe(Heading);
	expect(foo.props.children.props.children).toBe('Hello World!');
});