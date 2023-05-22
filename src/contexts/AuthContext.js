import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "react-use";

let defaultAuthValues = {
	short:'',
	long:''
};

export const AuthContext = createContext(null);
export const AuthDispatchContext = createContext(null);

export function useAuth() {
	return useContext(AuthContext);
}

export function useAuthDispatch(){
	return useContext(AuthDispatchContext);
}

function authReducer(auth, action){
	switch(action.type){
		case 'setShort':{
			auth.short = action.jwt;
			return auth;
		}
		case 'setLong':{
			auth.long = action.jwt;
			return auth;
		}
		case 'login':{
			return {
				long: action.data.long,
				short: action.data.short
			};
		}
		case 'logout':{
			return defaultAuthValues;
		}
		default: {
			return auth;
		  }
	}
}

export function AuthProvider({ children }){

	const [authStored, setAuthStored] = useLocalStorage('auth', defaultAuthValues);

	function initializer () {
		return authStored || defaultAuthValues;
	}

	const [auth, dispatch] = useReducer(
		authReducer,
		initializer
	);

	// On app boot, set the auth state to the localStorage value
	useEffect(() => {
		dispatch({
			type:'login',
			data: authStored
		})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	// Whenever auth changes, update the localStorage value
	useEffect(() => {
		setAuthStored(auth);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);


	return (
		<AuthContext.Provider value={auth}>
			<AuthDispatchContext.Provider value={dispatch}>
				{children}
			</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	)

}