import { useState } from "react";

export default function useAsyncReducer(reducer, initState) {
	// State within this hook is normal
	// - state: stores the result of the reducer
	// - setState: used by the dispatchState function to make reducer behave asychronously
	let [state, setState] = useState(initState);
	
	// Passes the dispatched action to the reducer,
	// runs the reducer, waits for a result,
	// applies the result to local state.
	const dispatchState = async (action) => {
		const newState = await reducer(state, action);
		setState(newState);
	};

	// Exposes these two bits for other components to use:
	// - local state, which is kept in sync with the reducer state on line 13
	// - dispatchState, which is used to asychronously run a reducer's actions
    return [state, dispatchState];
};