import React, { useEffect } from 'react';
import './styles/App.css';
import { windowPWAPreventer } from "./pwaHelpers";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';


function App() {

	useEffect(() => {
		windowPWAPreventer();
	}, []);

	return (
		<div >
			<Navbar />
			<div className='column left '>
				<Sidebar />
			</div>
			<div className='column right fill-screen-height'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>

		</div>
	);
}

export default App;