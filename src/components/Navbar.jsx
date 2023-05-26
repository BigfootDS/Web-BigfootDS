
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

	const { t } = useTranslation();


	return (
		<nav className="row bg-light">
			<div className='column navheader'>
				<Link to="/">
					<img className='companyHeader' src={theme === "bds" ? BDSHeaderWhite : BDSHeaderBlack} alt="The BigfootDS logo." />
				</Link>
			</div>


			<div className="column navmenu">
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
					{/* <li>
						<NavLink to="/news">
							{t('news')}
						</NavLink>
					</li> */}
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


			<div className='column navwidgets'>
				<div className='row'>
					<div className='column'>
						<AccountBar />
					</div>
					<div className='column'>
						<ThemeBar />
					</div>
					<div className='column'>
						<LanguageBar />
					</div>
				</div>
			</div>

		</nav>
	)
}