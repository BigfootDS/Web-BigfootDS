
import { useTranslation } from "react-i18next";
import LogInForm from "../components/LogInForm";
import "../styles/Login.css";

export default function Login(props) {

	const {t} = useTranslation();

	return (
		<div className="loginPage">

		<div className="row">
			
			<div className="column otpForm">
				{/* OTP form */}
			</div>
			<div className="column emailPassForm">
				<h1>{t("btn_log_in")}</h1>
				<LogInForm />
			</div>
			<div className="column socialAuthForm">
				{/* Social auth form */}
			</div>
		</div>
	</div>
	);
}