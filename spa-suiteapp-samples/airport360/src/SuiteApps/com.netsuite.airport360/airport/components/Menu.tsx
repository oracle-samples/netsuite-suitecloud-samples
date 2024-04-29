import {NavigationDrawer} from '@uif-js/component';
import NavigationItem from '../app/NavigationItem';
import Route from '../app/Route';
import {ContextType, SystemIcon, useContext} from '@uif-js/core';
export default function Menu() {
	// Get the router information
	const location = useContext(ContextType.ROUTER_LOCATION);
	// Return NavigationDrawer whose items route to given routes
	return (
		<NavigationDrawer selectedValue={getCurrentNavigationItem(location)}>
			<NavigationDrawer.Item
				value={NavigationItem.DASHBOARD}
				label={'Dashboard'}
				route={Route.DASHBOARD}
				icon={SystemIcon.HOME}
			/>
			<NavigationDrawer.Item
				value={NavigationItem.FLIGHTS}
				label={'Flights'}
				route={Route.FLIGHTS}
				icon={SystemIcon.LOCALIZE}
			/>
			<NavigationDrawer.Item
				value={NavigationItem.GATES}
				label={'Gates'}
				route={Route.GATES}
				icon={SystemIcon.DOCUMENTS}
			/>
		</NavigationDrawer>
	);
}

// Function that maps current route to NavigationDrawer.Item
const getCurrentNavigationItem = (location) => {
	for (const [route, navigationItem] of Object.entries(RouteToNavigationItem)) {
		if (location.matches(route, {exact: route !== Route.OTHERS})) {
			return navigationItem;
		}
	}
	return null;
};

// Mapping of routes to NavigationDrawer.Item values
const RouteToNavigationItem = {
	[Route.DASHBOARD]: NavigationItem.DASHBOARD,
	[Route.FLIGHTS]: NavigationItem.FLIGHTS,
	[Route.FLIGHT]: NavigationItem.FLIGHTS,
	[Route.GATES]: NavigationItem.GATES,
	[Route.GATE]: NavigationItem.GATES,
};
