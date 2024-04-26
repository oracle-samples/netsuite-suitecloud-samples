import {Hook, JSX, Router, Store} from '@uif-js/core';
import {StackPanel} from '@uif-js/component';
import reducer from './app/Reducer';
import {
	initialState,
	Item360State,
	Item360StateDashboard,
	Item360StateItem,
	Item360StateItems,
	Item360StateProfile,
} from './app/InitialState';
import RootRoute from './app/RootRoute';
import Navigation from './components/layout/Navigation';
import DashboardPage from './components/page/DashboardPage';
import ItemPage from './components/page/ItemPage';
import NotFoundPage from './components/page/NotFoundPage';
import ItemsPage from './components/page/ItemsPage';
import * as RecordPage from './data/RecordPage';
import ProfilePage from './components/page/ProfilePage';

export default function Item360(): JSX.Element {
	const [state, setState] = Hook.useState(initialState);
	const store: Store<Item360State> = Hook.useMemo(() => {
		return Store.create({
			reducer,
			state,
			onStateChanged: ({currentState}) => setState(currentState),
		});
	});

	const {
		items,
		item,
		dashboard,
		profile,
	}: {
		items: Item360StateItems;
		item: Item360StateItem;
		dashboard: Item360StateDashboard;
		profile: Item360StateProfile;
	} = state;
	return (
		<Router.Hash>
			<Store.Provider store={store}>
				<StackPanel>
					<StackPanel.Item shrink={0}>
						<Navigation />
					</StackPanel.Item>
					<StackPanel.Item grow={1}>
						<Router.Routes>
							<Router.Route path={RootRoute.DASHBOARD} exact={true}>
								<DashboardPage items={items} dashboard={dashboard} />
							</Router.Route>
							<Router.Route path={RootRoute.ITEMS} exact={true}>
								<ItemsPage items={items} />
							</Router.Route>
							<Router.Route path={RootRoute.ITEM} exact={true}>
								<ItemPage item={item} />
							</Router.Route>
							<Router.Route path={RootRoute.ITEM_EDIT} exact={true}>
								<ItemPage item={item} mode={RecordPage.Mode.EDIT} />
							</Router.Route>
							<Router.Route path={RootRoute.ITEM_CREATE} exact={true}>
								<ItemPage item={item} mode={RecordPage.Mode.CREATE} />
							</Router.Route>
							<Router.Route path={RootRoute.PROFILE}>
								<ProfilePage profile={profile} />
							</Router.Route>
							<Router.Route path={RootRoute.OTHERS}>
								<NotFoundPage />
							</Router.Route>
						</Router.Routes>
					</StackPanel.Item>
				</StackPanel>
			</Store.Provider>
		</Router.Hash>
	);
}
