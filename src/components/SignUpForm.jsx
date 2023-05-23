import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"


export default function SignUpForm(props){


	const authData = useAuth();
	const navigate = useNavigate();

	return(
		<div className="signUpForm bg-lighter">
			{authData?.long && navigate("/account")}
			<form>

			</form>
			<button>Create an account</button>
		</div>
	)
}