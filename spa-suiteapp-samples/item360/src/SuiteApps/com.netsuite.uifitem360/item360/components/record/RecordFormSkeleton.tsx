import {JSX} from '@uif-js/core';
import {GridPanel, Skeleton, StackPanel} from '@uif-js/component';

interface RecordFormSkeletonProps {
	sectionsCount?: number;
}

export default function RecordFormSkeleton({sectionsCount = 3}: RecordFormSkeletonProps): JSX.Element {
	const sections = [];
	for (let i = 0; i < sectionsCount; i++) {
		sections.push(<RecordSectionSkeleton />);
	}

	return (
		<StackPanel.Vertical itemGap={StackPanel.GapSize.XS} outerGap={StackPanel.GapSize.S}>
			{sections.map((section) => (
				<StackPanel.Item>{section}</StackPanel.Item>
			))}
		</StackPanel.Vertical>
	);
}

function RecordSectionSkeleton(): JSX.Element {
	return (
		<Skeleton.FieldGroup>
			<GridPanel
				columns={['1fr', '1fr', '1fr', '1fr']}
				rowGap={GridPanel.GapSize.XS}
				columnGap={GridPanel.GapSize.L}
				outerGap={GridPanel.GapSize.XXS}
			>
				<GridPanel.Item>
					<Skeleton.Field />
				</GridPanel.Item>
				<GridPanel.Item>
					<Skeleton.Field />
				</GridPanel.Item>
				<GridPanel.Item>
					<Skeleton.Field />
				</GridPanel.Item>
				<GridPanel.Item>
					<Skeleton.Field />
				</GridPanel.Item>
				<GridPanel.Item>
					<Skeleton.Field />
				</GridPanel.Item>
				<GridPanel.Item>
					<Skeleton.Field />
				</GridPanel.Item>
				<GridPanel.Item>
					<Skeleton.Field />
				</GridPanel.Item>
				<GridPanel.Item>
					<Skeleton.Field />
				</GridPanel.Item>
			</GridPanel>
		</Skeleton.FieldGroup>
	);
}
