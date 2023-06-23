// This custom renderer is for testing
// so that our tests can access stuff like context providers
// in a nice, D.R.Y, easy-to-understand way.
// Based on this:
// https://testing-library.com/docs/react-testing-library/setup#custom-render

import React from 'react'
import {render} from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import { AuthContext, AuthDispatchContext, AuthProvider } from "../contexts/AuthContext";
import LanguageProvider, { LanguageNameContext, LanguageSelectorContext } from "../contexts/LanguageContext";
import { ProfileContext, ProfileDispatchContext, ProfileProvider } from "../contexts/ProfileContext";
import ThemeProvider, { ThemeNameContext, ThemeSelectorContext } from "../contexts/ThemeContext";
import '../i18n';


function AllTheProviders(props) {
	// This is not ideal as it:
	//	1. Needs a lot of tweaks to accept default/mock data
	//	2. Will run whatever logic we coded up in those ___Provider components
	// return (
	// 	<AuthProvider>
	// 		<ProfileProvider>
	// 			<ThemeProvider>
	// 				<LanguageProvider>
	// 					<BrowserRouter>
	// 						{props.children}
	// 					</BrowserRouter>
	// 				</LanguageProvider>
	// 			</ThemeProvider>
	// 		</ProfileProvider>
	// 	</AuthProvider>
	// );

	// This style lets us specifically assign data to be read, and won't have any logic 
	let userData = {
		short:'',
		long:''
	}
	let userDispatch = () => {
		return userData;
	}

	let profileData = {
		displayName: '',
		lastSignInDate: '',
		displayPictureUrl: '',
		userId: ''
	}
	let profileDispatch = () => {
		return profileData;
	}

	// This style lets us specifically assign data to be read, and won't have any logic 
	return(
		<AuthContext.Provider value={userData}>
			<AuthDispatchContext.Provider value={userDispatch}>
				<ProfileContext.Provider value={profileData}>
					<ProfileDispatchContext.Provider value={profileDispatch}>
						{/* ThemeProvider doesn't have logic beyond setting document CSS values, it's fine to leave as is. */}
						<ThemeProvider>
							<LanguageNameContext.Provider value={"en"}>
								<LanguageSelectorContext.Provider value={() => {return "en";}}>
									{/* We don't need to customise the router, thankfully */}
									<BrowserRouter>
										{props.children}
									</BrowserRouter>
								</LanguageSelectorContext.Provider>
							</LanguageNameContext.Provider>
						</ThemeProvider>
								

					</ProfileDispatchContext.Provider>
				</ProfileContext.Provider>
			</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	)
}


function AllProvidersWithUserLoggedIn(props) {
	let userData = {
		short:'aaaaa',
		long:'aaaaa'
	}
	let userDispatch = () => {
		return userData;
	}

	let profileData = {
		displayName: 'Test User',
		lastSignInDate: new Date().getUTCMilliseconds(),
		displayPictureUrl: 'https://placekitten.com/200/300',
		userId: '123456789'
	}
	let profileDispatch = () => {
		return profileData;
	}

	// This style lets us specifically assign data to be read, and won't have any logic 
	return(
		<AuthContext.Provider value={userData}>
			<AuthDispatchContext.Provider value={userDispatch}>
				<ProfileContext.Provider value={profileData}>
					<ProfileDispatchContext.Provider value={profileDispatch}>
						{/* ThemeProvider doesn't have logic beyond setting document CSS values, it's fine to leave as is. */}
						<ThemeProvider>
							<LanguageNameContext.Provider value={"en"}>
								<LanguageSelectorContext.Provider value={() => {return "en";}}>
									{/* We don't need to customise the router, thankfully */}
									<BrowserRouter>
										{props.children}
									</BrowserRouter>
								</LanguageSelectorContext.Provider>
							</LanguageNameContext.Provider>
						</ThemeProvider>
								

					</ProfileDispatchContext.Provider>
				</ProfileContext.Provider>
			</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	)
}

const customRender = (ui, options) => render(ui, {wrapper: AllTheProviders, ...options});
export const customRenderLoggedInUser = (ui, options) => render(ui, {wrapper: AllProvidersWithUserLoggedIn, ...options});

// Re-export everything so we can just use this customRender file
// as an import in our complex React tests
export * from '@testing-library/react';

// Override render method available in the exports
export {customRender as render}
