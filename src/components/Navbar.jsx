
import '../styles/Navbar.css';
import { useThemeName } from "../contexts/ThemeContext";
import BDSHeaderBlack from "../assets/images/BigfootDSHeader_Black_512.png";
import BDSHeaderWhite from "../assets/images/BigfootDSHeader_White_512.png";
import { Link, NavLink } from "react-router-dom";
import AccountBar from './AccountBar';
import ThemeBar from './ThemeBar';

export default function Navbar(props) {


	const theme = useThemeName();



	return (
		<nav className="bg-light">
			<header className="navheader">
				<Link to="/">
					<img src={theme === "bds" ? BDSHeaderWhite : BDSHeaderBlack} alt="The BigfootDS logo." />
				</Link>
			</header>
			<div className="navmenu">
				<ul>
					<li>
						<NavLink to="/" >
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about">
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="/news">
							News
						</NavLink>
					</li>
					<li>
						<NavLink to="/games">
							Games
						</NavLink>
					</li>
					<li>
						<NavLink to="/account">
							Account
						</NavLink>
					</li>
					
				</ul>
			</div>
			<div className='navwidgets'>
				<AccountBar />
				<ThemeBar />
			</div>

		</nav>
	)
}