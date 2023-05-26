import React, { useEffect } from 'react';
import { windowPWAPreventer } from "./pwaHelpers";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import "./styles/App.css";
import Account from './pages/Account';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import GamesBrief from './components/GamesBrief';
import SignUp from './pages/SignUp';

function App() {

	useEffect(() => {
		windowPWAPreventer();
	}, []);

	return (
		<div className='flex-container bg-normal expand-to-parent-height'>
			<Navbar/>
			<div className='row appmain bg-normal'>
				<div className='column'>
					<Routes>
						<Route path="/" element={<Home />} />
						{/* Static pages, no cool interactivity or dynamic content: */}
						<Route path="/about" element={<AboutUs />} />
						<Route path="/games" element={<GamesBrief />} />

						{/* Dynamic pages: */}
						<Route path="/account" element={<Account />} />
						<Route path="/account/signup" element={<SignUp />} />
						<Route path="/account/login" element={<Login />} />

						<Route path="/news" element={<News />} />
					</Routes>
				</div>
			</div>

		</div>
	);
}

export default App;