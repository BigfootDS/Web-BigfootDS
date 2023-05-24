
import LogInForm from "../components/LogInForm";
import "../styles/Login.css";

export default function Login(props) {



	return (
		<div className="loginPage row">
			<div className="column otpForm">
				{/* OTP form */}
			</div>
			<div className="column emailPassForm">
				<LogInForm />
			</div>
			<div className="column socialAuthForm">
				{/* Social auth form */}
			</div>
		</div>
	);
}