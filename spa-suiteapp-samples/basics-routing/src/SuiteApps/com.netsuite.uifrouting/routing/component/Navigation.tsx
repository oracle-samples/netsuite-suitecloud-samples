import {ContentPanel, NavigationDrawer} from '@uif-js/component';
import NavigationItem from '../app/NavigationItem.js';
import {ContextType, Decorator, JSX, SystemIcon, useContext} from '@uif-js/core';
import {RootRoute, ListRoute} from '../app/CountriesAppRoute.js';

export default function Navigation(): JSX.Element {
	// Get the router information
	const location = useContext(ContextType.ROUTER_LOCATION);
	// Return NavigationDrawer whose items route to given routes
	return (
		<ContentPanel
			decorator={Decorator.background({color: Decorator.Color.NEUTRAL, strength: Decorator.Strength.LIGHTEST})}
		>
			<NavigationDrawer selectedValue={getCurrentNavigationItem(location)}>
				<NavigationDrawer.Item
					value={NavigationItem.DASHBOARD}
					icon={SystemIcon.HOME}
					label={'Dashboard'}
					route={RootRoute.DASHBOARD}
				/>
				<NavigationDrawer.Item
					value={NavigationItem.COUNTRIES}
					icon={SystemIcon.LOCALIZE}
					label={'Countries'}
					route={RootRoute.COUNTRIES}
				/>
				<NavigationDrawer.Item
					value={NavigationItem.LISTS}
					icon={SystemIcon.LIST}
					label={'Lists'}
					route={RootRoute.LISTS}
				>
					<NavigationDrawer.Item
						value={NavigationItem.LIST_AREA}
						label={'By Area'}
						route={`${RootRoute.LISTS}${ListRoute.AREA}`}
					/>
					<NavigationDrawer.Item
						value={NavigationItem.LIST_POPULATION}
						label={'By Population'}
						route={`${RootRoute.LISTS}${ListRoute.POPULATION}`}
					/>
				</NavigationDrawer.Item>
			</NavigationDrawer>
		</ContentPanel>
	);
}

// Function that maps current route to NavigationDrawer.Item
const getCurrentNavigationItem = (location) => {
	for (const [route, navigationItem] of Object.entries(RouteToNavigationItem)) {
		if (location.matches(route, {exact: route !== RootRoute.OTHERS}) === true) {
			return navigationItem;
		}
	}
	return null;
};

// Mapping of routes to NavigationDrawer.Item values
const RouteToNavigationItem = {
	[RootRoute.DASHBOARD]: NavigationItem.DASHBOARD,
	[RootRoute.COUNTRIES]: NavigationItem.COUNTRIES,
	[RootRoute.LISTS]: NavigationItem.LISTS,
	[`${RootRoute.LISTS}${ListRoute.AREA}`]: NavigationItem.LIST_AREA,
	[`${RootRoute.LISTS}${ListRoute.POPULATION}`]: NavigationItem.LIST_POPULATION,
};
