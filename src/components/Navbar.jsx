import { useEffect } from "react"
import { useAuth } from "../contexts/AuthContext";
import { useProfile } from "../contexts/ProfileContext";
import '../styles/Navbar.css';
import { useThemeName, useThemeSelector } from "../contexts/ThemeContext";


export default function Navbar(props){

	const auth = useAuth();
	const profile = useProfile();
	const theme = useThemeName();
	const setTheme = useThemeSelector();

	useEffect(() => {
		console.log("Auth value is:\n" + JSON.stringify(auth))
	},[auth]);

	return(
		<nav className="bg-dark">
			<h1>BigfootDS</h1>
			<h4>Active theme: {theme}</h4>
			<button onClick={() => {setTheme("bds")}}>Set theme to BDS</button>
			<button onClick={() => {setTheme("tbb")}}>Set theme to TBB</button>
			{(auth.long || auth.short) && <h3>Logged in!</h3>}
			{profile.displayName && 
			<h3>{profile.displayName}</h3>
			}
		</nav>
	)
}