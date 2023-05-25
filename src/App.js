import React, { useEffect } from 'react';
import { windowPWAPreventer } from "./pwaHelpers";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import "./styles/App.css";
import Account from './pages/Account';
import SignUpForm from './components/SignUpForm';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';

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

						{/* Dynamic pages: */}
						<Route path="/account" element={<Account />} />
						<Route path="/account/signup" element={<SignUpForm />} />
						<Route path="/account/login" element={<Login />} />
					</Routes>
				</div>
			</div>

		</div>
	);
}

export default App;