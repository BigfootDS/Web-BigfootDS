import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "react-use";
import { useAuth } from "./AuthContext";

let defaultProfileValues = {
	displayName: '',
	lastSignInDate: '',
	displayPictureUrl: '',
	userId: ''
};

export const ProfileContext = createContext(null);
export const ProfileDispatchContext = createContext(null);

export function useProfile() {
	return useContext(ProfileContext);
}

export function useProfileDispatch(){
	return useContext(ProfileDispatchContext);
}


function profileReducer(profile, action){
	switch(action.type){
		case 'set':{
			profile = action.profile;
			return profile;
		}
		
		case 'remove':{
			return defaultProfileValues;
		}
		default: {
			return profile;
		  }
	}
}

export function ProfileProvider({ children }){

	const [profileStored, setProfileStored] = useLocalStorage('profile', defaultProfileValues);

	function initializer () {
		return profileStored;
	}

	const [profile, dispatch] = useReducer(
		profileReducer,
		defaultProfileValues,
		initializer
	);

	useEffect(() => {
		setProfileStored(profile);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [profile]);

	// Listen for updates to auth JWTs
	// Retrieve profile information based on user ID within JWTs
	const auth = useAuth();
	useEffect(() => {
		console.log("Auth JWT changed, detected in Profile context.");
	}, [auth]);


	return (
		<ProfileContext.Provider value={profile}>
			<ProfileDispatchContext.Provider value={dispatch}>
				{children}
			</ProfileDispatchContext.Provider>
		</ProfileContext.Provider>
	)

}