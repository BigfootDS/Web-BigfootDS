import { useAuth, useAuthDispatch } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";


export default function Account(props){
	const authData = useAuth();
	const authDispatch = useAuthDispatch();
	const navigate = useNavigate();

	const logOutRequest = () => {
		authDispatch({type:"logout"});
		navigate("/account");
	}

	return(
		<div>
			{(authData?.long || authData?.short) ? 
			<div className="accountPage">
				<h1>Logged in!</h1>
				{/* Manage profile info */}

				{/* Manage OTP */}

				{/* Provide a logout option */}
				<button onClick={logOutRequest}>Log out</button>
			</div>
			:
			<div className="accountNotLoggedInPage">
				<Link to="/account/signup" >Create a new account</Link>
				<Link to="/account/login" >Log in to your existing account</Link>
			</div>
			}
		</div>
	)
}