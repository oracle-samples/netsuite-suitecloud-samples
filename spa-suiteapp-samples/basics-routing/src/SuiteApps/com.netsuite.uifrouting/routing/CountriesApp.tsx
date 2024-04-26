import {Router, Store, useMemo, useState} from '@uif-js/core';
import {StackPanel} from '@uif-js/component';
import reducer from './app/Reducer.js';
import initialState from './app/InitialState';
import {RootRoute, ListRoute} from './app/CountriesAppRoute';
import DashboardPage from './page/DashboardPage';
import CountriesPage from './page/CountriesPage';
import CountryPage from './page/CountryPage';
import ListPopulationPage from './page/list/ListPopulationPage';
import ListAreaPage from './page/list/ListAreaPage';
import Navigation from './component/Navigation';
import ListPage from './page/ListPage';
import NotFoundPage from './page/NotFoundPage';

export default function CountriesApp() {
	// Setup state management - in this case it only statically stores the countries data
	const [state, setState] = useState(initialState);
	const store = useMemo(() => {
		return Store.create({
			reducer,
			state: initialState,
			onStateChanged: ({currentState}) => setState(currentState),
		});
	});

	const {countries} = state;

	return (
		<Router.Hash>
			{/* Setup router */}
			<Store.Provider store={store}>
				{/* Setup store*/}
				<StackPanel>
					<StackPanel.Item shrink={0}>
						<Navigation />
					</StackPanel.Item>
					<StackPanel.Item grow={1}>
						<Router.Routes>
							<Router.Route path={RootRoute.DASHBOARD} exact={true}>
								<DashboardPage countries={countries} />
							</Router.Route>
							<Router.Route path={RootRoute.COUNTRIES} exact={true}>
								<CountriesPage countries={countries} />
							</Router.Route>
							<Router.Route path={RootRoute.COUNTRY} exact={true}>
								{/* @ts-ignore */}
								<CountryPage countries={countries} />
							</Router.Route>
							<Router.Route path={RootRoute.LISTS}>
								<Router.Routes>
									<Router.Route path={ListRoute.POPULATION}>
										<ListPopulationPage countries={countries} />
									</Router.Route>
									<Router.Route path={ListRoute.AREA}>
										<ListAreaPage countries={countries} />
									</Router.Route>
									<Router.Route>
										<ListPage />
									</Router.Route>
								</Router.Routes>
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
