import {JSX, Router, Store, Theme, useMemo, useState} from '@uif-js/core';
import {StackPanel, ThemeSelector} from '@uif-js/component';
import reducer from './app/Reducer.js';
import {initialState} from './app/InitialState';
import {RootRoute, ListRoute} from './app/CountriesAppRoute';
import DashboardPage from './page/DashboardPage';
import CountriesPage from './page/CountriesPage';
import CountryPage from './page/CountryPage';
import ListPopulationPage from './page/list/ListPopulationPage';
import ListAreaPage from './page/list/ListAreaPage';
import Navigation from './component/Navigation';
import ListPage from './page/ListPage';
import NotFoundPage from './page/NotFoundPage';

export default function CountriesApp(): JSX.Element {
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
		<ThemeSelector supportedThemes={[Theme.Name.REDWOOD, Theme.Name.REFRESHED]}>
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
		</ThemeSelector>
	);
}
