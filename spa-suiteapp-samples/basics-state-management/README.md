# State Management - Sample Single Page Application (SPA) SuiteApp

This sample SPA SuiteApp demonstrates the basics of state management. It features a simple `Counter` component
that has two buttons, one to increment and the other to decrement the counter.

This application uses only functional components.

## Installation
+ `npm i` to install required dependencies
+ `suitecloud account:setup` to set up the  account where the app is to be deployed
+ `npm run build` to build the project inside a new `build` directory
+ `npm run deploy` to bundle the built app into the `FileCabinet` folder and deploy it into the configured account

For more information, see also [SPA Build Setup](../README.md#build-setup) and [SPA SuiteApp Deployment](../README.md#suiteapp-deployment).

## State Management Overview

The NetSuite UI Framework (UIF) recommends following the Redux state management pattern for managing the state of an application as it grows larger. According to this approach, the application state is treated as an immutable object. A new state is created from the old one using a reducer function, which responds to dispatched actions.

In this model, all application state is stored in the `Store` and can be modified only by dispatching an `action`. The `Store` takes the action and uses a `reducer` to modify the stored state based on the action. Afterwards, the application is re-rendered using the new state.

## Actions

Action is an event call by the dispatcher that triggers the reducer. Each action is an object identified (usually) by
the `type` property and can contain arbitrary number of other properties.

There are two actions in this particular app:

- `AppType.COUNTER_INCREMENT` - defines action that increments the counter by 1
- `AppType.COUNTER_DECREMENT` - defines action that decrements the counter by 1

Each action has an action creator function that simplifies the creation of the action object. This object is then passed to the dispatch function:

- `Action.counterIncrement()`
- `Action.counterDecrement()`

The definition of both actions and action creators can be found in the `app/Action.js` file.

```javascript
// Action types - enumeration of available actions
const ActionType = {
    COUNTER_INCREMENT: Symbol('counterIncrement'),
    COUNTER_DECREMENT: Symbol('counterDecrement'),
};

// Action creators - functions that return the action object
const Action = {
    // Increment counter
    counterIncrement() {
        return {
            type: ActionType.COUNTER_INCREMENT,
        };
    },
    // Decrement counter
    counterDecrement() {
        return {
            type: ActionType.COUNTER_DECREMENT,
        };
    },
};

export {ActionType, Action};
```

## Reducer

Reducer is in charge of creating a new state from the old one. The change depends on the action that was triggered and the optional parameters it carries. Reducer is a simple function with two arguments, first is the current state and second is the called action. Reducer must always return a new state, even if it is unchanged.

The reducer in this app is defined to react to each of the actions mentioned above. It creates a new state with the counter value incremented or decremented by 1. The definition of the reducer can be found in the `app/Reducer.js` file.

```javascript
import {ImmutableUpdate} from '@uif-js/core';
import {ActionType} from './Action.js';

export default function reducer(state, action) {
    switch (action.type) {
        // Reacts to ActionType.COUNTER_INCREMENT action
        case ActionType.COUNTER_INCREMENT: {
            // Increment counter by 1
            return ImmutableUpdate.of(state, (state) => {
                state.counter = state.counter + 1;
            });
        }
        // Reacts to ActionType.COUNTER_DECREMENT action
        case ActionType.COUNTER_DECREMENT: {
            // Decrement counter by 1
            return ImmutableUpdate.of(state, (state) => {
                state.counter = state.counter - 1;
            });
        }
        // Default handler for any other actions that might occur
        default: {
            return state;
        }
    }
}
```

## Store

Store is the central part of the state management. It holds the current state and provides the `dispatch` function that
allows to call actions. These actions trigger the reducer and results in the creation of a new state.

Store is usually defined at the top most level of the application. In this example, it is defined in the `CounterApp.js`.

When creating new store, you need to provide the reducer and initial app state. The initial app state is defined in
the `app/InitialState.js` file.

```javascript
export default {
    counter: 0,
};
```

Whenever the state changes, the app should re-render and pass the new state down to its child components, so they can
react and re-render if their props have changed. This is done in the `onStateChanged` event handler.

```javascript
const [state, setState] = Hook.useState(initialState);
const store = Hook.useMemo(() => {
    return Store.create({
        reducer,
        state,
        onStateChanged: ({currentState}) => setState(currentState),
    });
});
```

## Dispatching actions

In order for the `dispatch` function to be available to the child components, the app must be wrapped in
the `<Store.Provider>` wrapper, as seen in the `CounterApp.js` file.

```javascript
return (
    <Store.Provider store={store}>
        <Counter value={state.counter}/>
    </Store.Provider>
);
```

Dispatch is then available in all child components after retrieving it through the `Hook.useDispatch()` hook. Using
the `dispatch` is then as easy as just calling it with one argument — the action object, which can be obtained from the action creator. See `component/Counter.js` file.

```javascript
const dispatch = Hook.useDispatch();

// Handler for the increment button
const incrementButtonHandler = () => {
    // Dispatch Action that increments the counter
    dispatch(Action.counterIncrement());
};

// Handler for the decrement button
const decrementButtonHandler = () => {
    // Dispatch Action that decrements the counter
    dispatch(Action.counterDecrement());
};
```

After the action is dispatched, the reducer creates the new state according to the called action and the app is re-rendered with the new counter value displayed.
