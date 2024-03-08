import {JSX} from '@uif-js/core';
import {Portlet, Reminder, Skeleton, StackPanel} from '@uif-js/component';
import * as DataMapping from '../../data/DataMapping';
import {Item360StateDashboardReminders} from '../../app/InitialState';

export default function PortletReminders({loading, data}: Item360StateDashboardReminders): JSX.Element {
	return (
		<Portlet title={'Reminders'}>
			{loading ? (
				<Skeleton.Reminders count={3} />
			) : (
				<StackPanel.Vertical itemGap={StackPanel.GapSize.XS}>
					{data.map(({description, count, color}) => (
						<StackPanel.Item>
							<Reminder
								description={description}
								count={count}
								color={DataMapping.ReminderColor[color]}
							/>
						</StackPanel.Item>
					))}
				</StackPanel.Vertical>
			)}
		</Portlet>
	);
}
