import {JSX} from '@uif-js/core';
import {ContentPanel, ScrollPanel, Skeleton} from '@uif-js/component';

function ItemsSkeleton(): JSX.Element {
	return (
		<ScrollPanel orientation={ScrollPanel.Orientation.VERTICAL}>
			<ContentPanel outerGap={ContentPanel.GapSize.S}>
				<Skeleton.Table rows={Math.floor(window.innerHeight / 42)} columns={5} />
			</ContentPanel>
		</ScrollPanel>
	);
}

export default ItemsSkeleton;
