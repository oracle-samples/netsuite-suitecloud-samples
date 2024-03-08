import {Hook, Store} from '@uif-js/core';
import reducer from './app/Reducer.js';
import Counter from './component/Counter.js';
import initialState from './app/InitialState.js';

export default function CounterApp() {
	const [state, setState] = Hook.useState(initialState);
	const store = Hook.useMemo(() => {
		return Store.create({
			reducer,
			state,
			onStateChanged: ({currentState}) => setState(currentState),
		});
	});

	return (
		<Store.Provider store={store}>
			<Counter value={state.counter} />
		</Store.Provider>
	);
}
