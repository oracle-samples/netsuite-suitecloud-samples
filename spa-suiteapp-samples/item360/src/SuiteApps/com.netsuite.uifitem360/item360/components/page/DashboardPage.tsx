import {ApplicationHeader, GridPanel, ScrollPanel, StackPanel} from '@uif-js/component';
import {Decorator, JSX, SystemIcon, useDispatch, useLayoutEffect} from '@uif-js/core';
import PortletTotalItems from '../portlet/PortletTotalItems';
import PortletInStock from '../portlet/PortletInStock';
import PortletReminders from '../portlet/PortletReminders';
import PortletChart from '../portlet/PortletChart';
import TopList from '../topList/TopList';
import {Action} from '../../app/Action';
import {Item360StateDashboard, Item360StateItems} from '../../app/InitialState';

interface DashboardPageProps {
	items: Item360StateItems;
	dashboard: Item360StateDashboard;
}

export default function DashboardPage({items, dashboard}: DashboardPageProps): JSX.Element {
	const {loading, data} = items;
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		dispatch(Action.itemsLoad());
		dispatch(Action.remindersLoad());
	}, []);

	return (
		<StackPanel.Vertical>
			<StackPanel.Item shrink={0}>
				<ApplicationHeader
					title={'Item 360'}
					subtitle={'Everything about items'}
					icon={SystemIcon.ATTRIBUTES}
				/>
			</StackPanel.Item>
			<StackPanel.Item grow={1}>
				<ScrollPanel orientation={ScrollPanel.Orientation.VERTICAL}>
					<GridPanel
						rows={[]}
						columns={['1fr', '1fr', '1fr', '1fr']}
						outerGap={GridPanel.GapSize.S}
						columnGap={GridPanel.GapSize.XS}
						rowGap={GridPanel.GapSize.XS}
					>
						<GridPanel.Item rowIndex={0} columnIndex={0}>
							<PortletTotalItems loading={loading} data={data} />
						</GridPanel.Item>
						<GridPanel.Item rowIndex={0} columnIndex={1}>
							<PortletReminders {...dashboard.reminders} />
						</GridPanel.Item>
						<GridPanel.Item rowIndex={0} columnIndex={2}>
							<PortletChart loading={loading} data={dashboard.chart.data} />
						</GridPanel.Item>
						<GridPanel.Item rowIndex={0} columnIndex={3}>
							<PortletInStock loading={loading} data={data} />
						</GridPanel.Item>
						<GridPanel.Item rowIndex={1} columnIndex={0} columnSpan={2}>
							<TopList
								title={'Most Expensive Items'}
								items={dashboard.topMostExpensive}
								loading={loading}
							/>
						</GridPanel.Item>
						<GridPanel.Item rowIndex={1} columnIndex={2} columnSpan={2}>
							<TopList
								title={'Cheapest Items'}
								items={dashboard.topCheapest}
								loading={loading}
								strength={Decorator.Strength.LIGHTER}
							/>
						</GridPanel.Item>
					</GridPanel>
				</ScrollPanel>
			</StackPanel.Item>
		</StackPanel.Vertical>
	);
}
