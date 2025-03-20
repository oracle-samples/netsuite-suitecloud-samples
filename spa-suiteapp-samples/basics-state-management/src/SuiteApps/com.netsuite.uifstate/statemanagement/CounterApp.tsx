import {JSX, Store, Theme, useMemo, useState} from '@uif-js/core';
import reducer from './app/Reducer.js';
import Counter from './component/Counter.js';
import {initialState} from './app/InitialState.js';
import {ThemeSelector} from '@uif-js/component';

export default function CounterApp(): JSX.Element {
	const [state, setState] = useState(initialState);
	const store = useMemo(() => {
		return Store.create({
			reducer,
			state,
			onStateChanged: ({currentState}) => setState(currentState),
		});
	});

	return (
		<ThemeSelector supportedThemes={[Theme.Name.REDWOOD, Theme.Name.REFRESHED]}>
			<Store.Provider store={store}>
				<Counter value={state.counter} />
			</Store.Provider>
		</ThemeSelector>
	);
}
