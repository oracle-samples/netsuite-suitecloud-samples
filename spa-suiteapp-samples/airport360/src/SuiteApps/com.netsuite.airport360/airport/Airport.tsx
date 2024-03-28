import {StackPanel, ScrollPanel} from '@uif-js/component';
import FlightList from './components/flights/FlightList';
import GateList from './components/gates/GateList';
import {PureComponent, Store, Router} from '@uif-js/core';
import initialState from './app/InitialState';
import reducer from './app/Reducer';
import Menu from './components/Menu';
import Route from './app/Route';
import NotFoundPage from './components/NotFoundPage';
import FlightPage from './components/flights/FlightPage';
import Dashboard from './components/Dashboard';

const scrollOptions = {
	scrollAmount: 42,
	hoverScrollAmount: 100,
	hoverScrollRepeat: 100,
	orientation: ScrollPanel.Orientation.VERTICAL,
};

export default class Airport extends PureComponent {
	private store: Store;
	constructor(props, context) {
		super(props, context);
		const state = initialState;
		// Create store that holds the application state, pass the reducer functions and initial state
		this.store = Store.create({
			reducer,
			state,
			onStateChanged: ({currentState}) => this.setState({state: currentState}),
		});
		this.state = {
			state,
		};
	}

	render() {
		const {state} = this.state;
		const {flights, gates} = state;
		return (
			<Store.Provider store={this.store}>
				{/* Wrapper component that allows children component to use dispatch function to trigger store actions */}
				<Router.Hash>
					{/* Layout component that make the app ake the height and width of the browser window */}
					<StackPanel>
						{/* Basic two column layout */}
						<StackPanel.Item shrink={0}>
							<Menu />
							{/* Navigation component */}
						</StackPanel.Item>
						<StackPanel.Item grow={1}>
							<ScrollPanel {...scrollOptions}>
								{/* ScrollPanel that contains page content - enables scrolling just the content, not the rest of the app that is fixed */}
								<Router.Routes>
									<Router.Route path={Route.DASHBOARD} exact={true}>
										<Dashboard flights={flights} gates={gates} />
									</Router.Route>
									{/* Content loaded based on the current route */}
									<Router.Route path={Route.GATES} exact={true}>
										<GateList flights={flights} gates={gates} />
									</Router.Route>
									<Router.Route path={Route.GATE} exact={true}>
										<GateList flights={flights} gates={gates} />
									</Router.Route>
									<Router.Route path={Route.FLIGHTS} exact={true}>
										<FlightList flights={flights} gates={gates} />
									</Router.Route>
									<Router.Route path={Route.FLIGHT} exact={true}>
										<FlightPage flights={flights} gates={gates} />
									</Router.Route>
									<Router.Route path={Route.OTHERS}>
										<NotFoundPage />
									</Router.Route>
								</Router.Routes>
							</ScrollPanel>
						</StackPanel.Item>
					</StackPanel>
				</Router.Hash>
			</Store.Provider>
		);
	}
}
