
import '../styles/Navbar.css';
import { useThemeName } from "../contexts/ThemeContext";
import BDSHeaderBlack from "../assets/images/BigfootDSHeader_Black_512.png";
import BDSHeaderWhite from "../assets/images/BigfootDSHeader_White_512.png";
import { Link, NavLink } from "react-router-dom";
import AccountBar from './AccountBar';
import ThemeBar from './ThemeBar';
import { useTranslation } from 'react-i18next';
import LanguageBar from './LanguageBar';

export default function Navbar(props) {


	const theme = useThemeName();

	const {t} = useTranslation();


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
							{t('home')}
						</NavLink>
					</li>
					<li>
						<NavLink to="/about">
							{t('about')}
						</NavLink>
					</li>
					<li>
						<NavLink to="/news">
							{t('news')}
						</NavLink>
					</li>
					<li>
						<NavLink to="/games">
						{t('games')}
						</NavLink>
					</li>
					<li>
						<NavLink to="/account">
						{t('account')}
						</NavLink>
					</li>
					
				</ul>
			</div>
			<div className='navwidgets'>
				<AccountBar />
				<ThemeBar />
				<LanguageBar />
			</div>

		</nav>
	)
}