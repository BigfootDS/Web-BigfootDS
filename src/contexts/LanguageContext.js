import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

let defaultLanguage = "en";

export const languages = {
	en: {

	}
}

const LanguageNameContext = createContext(defaultLanguage);
const LanguageSelectorContext = createContext(defaultLanguage);

export function useLanguageName(){
	return useContext(LanguageNameContext);
}

export function useLanguageSelector(){
	return useContext(LanguageSelectorContext);
}

export default function LanguageProvider(props){
	const [language, setLanguage] = useState(defaultLanguage);
	const [languageStored, setLanguageStored] = useLocalStorage("language", defaultLanguage);
	

	const selectLanguage = (newLang) => {
		if (languages.hasOwnProperty(newLang)){
			console.log("Setting theme to selection now.");
			for (const value in languages[newLang]){
				//document.documentElement.style.setProperty(`--${value}`, themes[newLang][value]);
			}
			return true;
		} else {
			console.log("Invalid language supplied. Doing nothing.");
			return false;
		}
	}

	// On app start, themeStored is automatically pulled from 
	// the browser's local storage and then applied to this global state.
	useEffect(() => {
		setLanguage(languageStored);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// If the theme changes, set the new value to the browser's local storage.
	useEffect(() => {
		if (selectLanguage(language)){
			setLanguageStored(language);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [language]);

	return(
		<LanguageNameContext.Provider value={language} >
			<LanguageSelectorContext.Provider value={setLanguage}>
				{props.children}
			</LanguageSelectorContext.Provider>
		</LanguageNameContext.Provider>
	)
}