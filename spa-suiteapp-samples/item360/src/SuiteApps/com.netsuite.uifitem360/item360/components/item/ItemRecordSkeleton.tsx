import {JSX} from '@uif-js/core';
import {ScrollPanel, Skeleton, StackPanel} from '@uif-js/component';
import RecordFormSkeleton from '../record/RecordFormSkeleton';

export default function ItemRecordSkeleton(): JSX.Element {
	return (
		<StackPanel.Vertical>
			<StackPanel.Item shrink={0}>
				<Skeleton.ApplicationHeader actions={2} />
			</StackPanel.Item>
			<StackPanel.Item grow={1}>
				<ScrollPanel orientation={ScrollPanel.Orientation.VERTICAL}>
					<RecordFormSkeleton sectionsCount={3} />
				</ScrollPanel>
			</StackPanel.Item>
		</StackPanel.Vertical>
	);
}
