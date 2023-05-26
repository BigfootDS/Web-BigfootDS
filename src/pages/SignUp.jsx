import { useTranslation } from "react-i18next";
import SignUpForm from "../components/SignUpForm";
import "../styles/Login.css";

export default function SignUp(props) {

	const {t} = useTranslation();

	return (
		<div className="loginPage">
			
			<div className="row">
				
				<div className="column otpForm">
					{/* OTP form */}
				</div>
				<div className="column emailPassForm">
					<h1>{t("btn_create_new_account")}</h1>
					<SignUpForm />
				</div>
				<div className="column socialAuthForm">
					{/* Social auth form */}
				</div>
			</div>
		</div>
	);
}