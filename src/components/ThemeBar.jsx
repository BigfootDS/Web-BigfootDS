import { useThemeName, useThemeSelector, themes } from "../contexts/ThemeContext";

export default function ThemeBar(props){
	let themeOptions = Object.keys(themes);
	const theme = useThemeName();
	const setTheme = useThemeSelector();

	const changeTheme = (event) => {
		setTheme(event.target.value);
	}

	return (
		<div style={{display:"flex"}}>
			<h1>🎨</h1>
			<select value={theme} onChange={changeTheme}>
				{themeOptions.map((theme) => {
					return <option key={theme} value={theme}>{theme.toLocaleUpperCase()}</option>
				})}
			</select>
		</div>
	)
}