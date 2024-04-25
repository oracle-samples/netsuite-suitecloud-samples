import {NavigationDrawer} from '@uif-js/component';
import {NavigationItem} from '../../app/NavigationItem';
import {ContextType, JSX, RouterLocation, SystemIcon, useContext} from '@uif-js/core';
import RootRoute from '../../app/RootRoute';

export default function Navigation(): JSX.Element {
	const location = useContext<RouterLocation>(ContextType.ROUTER_LOCATION);
	return (
		<NavigationDrawer selectedValue={getCurrentNavigationItem(location)}>
			<NavigationDrawer.Item
				value={NavigationItem.DASHBOARD}
				icon={SystemIcon.HOME}
				label={'Dashboard'}
				route={RootRoute.DASHBOARD}
			/>
			<NavigationDrawer.Item
				value={NavigationItem.ITEMS}
				icon={SystemIcon.LIST}
				label={'Items'}
				route={RootRoute.ITEMS}
			/>
			<NavigationDrawer.Item
				value={NavigationItem.PROFILE}
				icon={SystemIcon.PERSON}
				label={'Profile'}
				route={RootRoute.PROFILE}
			/>
		</NavigationDrawer>
	);
}

// Function that maps current route to NavigationDrawer.Item
const getCurrentNavigationItem = (location: RouterLocation) => {
	for (const [route, navigationItem] of Object.entries(RouteToNavigationItem)) {
		if (location.matches(route, {exact: route !== RootRoute.OTHERS})) {
			return navigationItem;
		}
	}
	return null;
};

// Mapping of routes to NavigationDrawer.Item values
const RouteToNavigationItem = {
	[RootRoute.DASHBOARD]: NavigationItem.DASHBOARD,
	[RootRoute.ITEMS]: NavigationItem.ITEMS,
	[RootRoute.PROFILE]: NavigationItem.PROFILE,
};
