import React, { useEffect } from 'react';
import { windowPWAPreventer } from "./pwaHelpers";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import "./styles/App.css";

function App() {

	useEffect(() => {
		windowPWAPreventer();
	}, []);

	return (
		<div className='bg-normal expand-to-parent-height'>
			<Navbar />
			<div className='appmain bg-normal'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>

		</div>
	);
}

export default App;