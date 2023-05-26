import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "react-use";
import useAsyncReducer from "../utils/useAsyncReducer";

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

async function authReducer(auth, action){
	let authStateEditable = {...auth}
	switch(action.type){
		case 'setShort':{
			authStateEditable.short = action.jwt;
			return authStateEditable;
		}
		case 'setLong':{
			authStateEditable.long = action.jwt;
			return authStateEditable;
		}
		case 'register':{
			
			let signUpResult = await fetch("https://auth.bigfootds.dev/users/signup", {
				method: "POST",
				headers: {
					'Content-Type':"application/json"
				},
				body: JSON.stringify({email: action.data.email, password: action.data.password})
			}).then((response) =>  response.json());
			console.log(signUpResult);
			if (signUpResult.tokens){
				return signUpResult.tokens;
			} else {
				return defaultAuthValues;
			}

		}
		case 'login':{

			let loginResult = await fetch("https://auth.bigfootds.dev/users/login", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',

				},
				body: JSON.stringify({email: action.data.email, password: action.data.password})
			}).then((response) => response.json());
			if (loginResult.tokens){
				return loginResult.tokens;
			} else {
				return defaultAuthValues;
			}
			
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

	const [auth, dispatch] = useAsyncReducer(
		authReducer,
		initializer
	);

	// On app boot, set the auth state to the localStorage value
	useEffect(() => {
		if (authStored.long || authStored.short){
			console.log("User session found on this device, refreshing it now.");
			dispatch({
				type:'login',
				data: authStored
			})
		}
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