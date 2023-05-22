import { Link } from "react-router-dom";


export default function Sidebar(props) {

	return (
		<div className='sidebar bg-blue-light fill-screen-height'>
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
		</div>
	)
}