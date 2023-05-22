import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

let defaultTheme = "bds";

export const themes = {
	bds: {
		primary: "#1e6cb6",
		text: "white",
		white: "white",
		black: "black",
		lightest: "#bbdefb",
		lighter: "#64b5f6",
		light: "#2196f3",
		normal:"#1e6cb6",
		dark:"#0d47a1",
		darker:"#1a237e",
		darkest: "#1d0743"
	},
	tbb: {
		primary: "#ffc107",
		text:"black",
		white: "white",
		black: "black",
		lightest: "#f2e4bb",
		lighter: "#ffe28e",
		light: "#ffd14a",
		normal:"#ffc107",
		dark:"#f8b007",
		darker:"#d19E06",
		darkest: "#8d6a00"
	}
}

const ThemeNameContext = createContext(defaultTheme);
const ThemeSelectorContext = createContext(defaultTheme);

export function useThemeName(){
	return useContext(ThemeNameContext);
}

export function useThemeSelector(){
	return useContext(ThemeSelectorContext);
}

export default function ThemeProvider(props){
	const [theme, setTheme] = useState(defaultTheme);
	const [themeStored, setThemeStored] = useLocalStorage("theme", defaultTheme);
	

	const selectTheme = (newTheme) => {
		if (themes.hasOwnProperty(newTheme)){
			console.log("Setting theme to selection now.");
			for (const value in themes[newTheme]){
				document.documentElement.style.setProperty(`--${value}`, themes[newTheme][value]);
			}
			return true;
		} else {
			console.log("Invalid theme supplied. Doing nothing.");
			return false;
		}
	}

	// On app start, themeStored is automatically pulled from 
	// the browser's local storage and then applied to this global state.
	useEffect(() => {
		setTheme(themeStored);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// If the theme changes, set the new value to the browser's local storage.
	useEffect(() => {
		if (selectTheme(theme)){
			setThemeStored(theme);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme]);

	return(
		<ThemeNameContext.Provider value={theme} >
			<ThemeSelectorContext.Provider value={setTheme}>
				{props.children}
			</ThemeSelectorContext.Provider>
		</ThemeNameContext.Provider>
	)
}