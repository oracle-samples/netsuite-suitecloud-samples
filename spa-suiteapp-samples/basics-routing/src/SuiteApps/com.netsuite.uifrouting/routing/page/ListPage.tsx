import {ApplicationHeader, Card, GridPanel, StackPanel} from '@uif-js/component';
import {ContextType, JSX, SystemIcon, useContext} from '@uif-js/core';
import {RootRoute, ListRoute} from '../app/CountriesAppRoute';

export default function ListPage(): JSX.Element {
	const navigator = useContext(ContextType.ROUTER_NAVIGATION);
	return (
		<StackPanel.Vertical>
			<StackPanel.Item>
				<ApplicationHeader title={'Lists'} subtitle={'Pre sorted country lists'} icon={SystemIcon.LIST} />
			</StackPanel.Item>
			<StackPanel.Item>
				<GridPanel
					columns={['350px', '350px']}
					columnGap={GridPanel.GapSize.LARGE}
					outerGap={GridPanel.GapSize.LARGE}
				>
					<GridPanel.Item>
						<Card
							title={'Countries by Population'}
							action={() => {
								navigator.push(`${RootRoute.LISTS}${ListRoute.POPULATION}`);
							}}
						>
							List of countries sorted by their total population from the highest to the lowest.
						</Card>
					</GridPanel.Item>
					<GridPanel.Item>
						<Card
							title={'Countries by Area'}
							action={() => {
								navigator.push(`${RootRoute.LISTS}${ListRoute.AREA}`);
							}}
						>
							List of countries sorted by their area from the biggest to the smallest.
						</Card>
					</GridPanel.Item>
				</GridPanel>
			</StackPanel.Item>
		</StackPanel.Vertical>
	);
}
