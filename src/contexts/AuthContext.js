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
				return {
					long: signUpResult.tokens.long,
					short: signUpResult.tokens.short,
					id: signUpResult.user._id,
					isEmailVerified: signUpResult.user.isEmailVerified,
					createdAt: signUpResult.user.createdAt,
					updatedAt: signUpResult.user.updatedAt
				}
			} else {
				return defaultAuthValues;
			}

		}

		case 'sessionRefresh':{
			// Supply a long or short JWT,
			// receive fresh JWTs plus user obj
			let refreshResult = null;

			if (!action.data.short && !action.data.long) {
				return defaultAuthValues;
			}

			console.log("Refreshing JWTs now");

			if (action.data.short){
				refreshResult = await fetch("https://auth.bigfootds.dev/users/getUserFromJwtShort", {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${action.data.short}`
					},
				}).then((response) => response.json());
			} else {
				refreshResult = await fetch("https://auth.bigfootds.dev/users/getUserFromJwtLong", {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${action.data.long}`
					},
				}).then((response) => response.json());
			}

			if (refreshResult.tokens){
				console.log("Finished refreshing tokens successfully!");
				return {
					long: refreshResult.tokens.long,
					short: refreshResult.tokens.short,
					id: refreshResult.user._id,
					isEmailVerified: refreshResult.user.isEmailVerified,
					createdAt: refreshResult.user.createdAt,
					updatedAt: refreshResult.user.updatedAt
				};
			} else {
				console.log("Refreshresult failed, its:");
				console.log(refreshResult);
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
				return {
					long: loginResult.tokens.long,
					short: loginResult.tokens.short,
					id: loginResult.user._id,
					isEmailVerified: loginResult.user.isEmailVerified,
					createdAt: loginResult.user.createdAt,
					updatedAt: loginResult.user.updatedAt
				};
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
				type:'sessionRefresh',
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