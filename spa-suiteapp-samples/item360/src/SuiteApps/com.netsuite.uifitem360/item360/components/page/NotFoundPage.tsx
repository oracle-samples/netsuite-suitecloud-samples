import {JSX} from '@uif-js/core';
import {ContentPanel, Heading, Link, StackPanel} from '@uif-js/component';
import RootRoute from '../../app/RootRoute';

export default function NotFoundPage(): JSX.Element {
	return (
		<ContentPanel
			outerGap={ContentPanel.GapSize.XXL}
			verticalAlignment={ContentPanel.VerticalAlignment.CENTER}
			horizontalAlignment={ContentPanel.HorizontalAlignment.CENTER}
		>
			<StackPanel.Vertical itemGap={StackPanel.GapSize.L} alignment={StackPanel.Alignment.CENTER}>
				<StackPanel.Item>
					<Heading>Page 404</Heading>
				</StackPanel.Item>
				<StackPanel.Item>
					<Link route={RootRoute.DASHBOARD}>Go back to dashboard</Link>
				</StackPanel.Item>
			</StackPanel.Vertical>
		</ContentPanel>
	);
}
