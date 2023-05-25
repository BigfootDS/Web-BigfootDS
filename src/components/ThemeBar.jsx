import { useThemeName, useThemeSelector, themes } from "../contexts/ThemeContext";

export default function ThemeBar(props){
	let themeOptions = Object.keys(themes);
	const theme = useThemeName();
	const setTheme = useThemeSelector();

	const changeTheme = (event) => {
		setTheme(event.target.value);
	}

	return (
		<div className="themebar" >
			<h1>🎨</h1>
			<select value={theme} onChange={changeTheme}>
				{themeOptions.map((themeOption) => {
					return <option key={themeOption} value={themeOption}>{themeOption.toLocaleUpperCase()}</option>
				})}
			</select>
		</div>
	)
}