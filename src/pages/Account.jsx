import { useAuth, useAuthDispatch } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Account.css";
import { useTranslation } from "react-i18next";
import AccountCardParent from "../components/AccountCardParent";

export default function Account(props){
	const authData = useAuth();
	const authDispatch = useAuthDispatch();
	const navigate = useNavigate();
	const {t} = useTranslation();

	const logOutRequest = () => {
		authDispatch({type:"logout"});
		navigate("/account");
	}

	return(
		<div>
			{(authData?.long || authData?.short) ? 
			<div className="accountPage row">
				
				<div className="column">

				</div>
				
				<div className="column">

					{/* Manage profile info */}
					<AccountCardParent />

					{/* Manage OTP */}


					{/* Provide a logout option */}
					<button onClick={logOutRequest}>Log out</button>
				</div>
				
				<div className="column">

				</div>
			</div>
			:
			<div className="accountNotLoggedInPage row">
				<div className="column">

				</div>
				<div className="column">
					<Link to="/account/signup" >{t("btn_create_new_account")}</Link>
					<Link to="/account/login" >{t("btn_log_in")}</Link>
					<p>Accounts are currently accessing data in the {process.env.NODE_ENV} environment.</p>
					<p>Extra custom secret is: {process.env.SOME_CUSTOM_SECRET}</p>
				</div>
				<div className="column">

				</div>
				
			</div>
			}
		</div>
	)
}