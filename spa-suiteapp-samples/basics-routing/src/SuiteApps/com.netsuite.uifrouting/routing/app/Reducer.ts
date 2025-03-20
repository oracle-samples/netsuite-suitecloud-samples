// Simple reducer that always returns the same state
import {CountriesState} from './InitialState';

interface CountriesAction {
	type: string;
}

export default function reducer(state: CountriesState, action: CountriesAction): CountriesState {
	switch (action.type) {
		default: {
			return state;
		}
	}
}
