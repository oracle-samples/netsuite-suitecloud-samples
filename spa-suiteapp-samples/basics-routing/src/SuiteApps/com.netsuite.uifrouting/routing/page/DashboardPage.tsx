import {ApplicationHeader, ContentPanel, Heading, StackPanel} from '@uif-js/component';
import {SystemIcon} from '@uif-js/core';

export default function DashboardPage() {
	return (
		<StackPanel.Vertical>
			<StackPanel.Item>
				<ApplicationHeader title={'Dashboard'} subtitle={'Countries App Homepage'} icon={SystemIcon.HOME} />
			</StackPanel.Item>
			<StackPanel.Item>
				<ContentPanel outerGap={ContentPanel.GapSize.LARGE}>
					<Heading type={Heading.Type.MEDIUM_HEADING}>Welcome to the Countries App!</Heading>
				</ContentPanel>
			</StackPanel.Item>
		</StackPanel.Vertical>
	);
}
