import { useNavigate } from "react-router-dom";
import { useAuth, useAuthDispatch } from "../contexts/AuthContext"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


export default function LogInForm(props){


	const {t} = useTranslation();
	const authData = useAuth();
	const navigate = useNavigate();

	const authDispatch = useAuthDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChangeEmail = (event) => {
		setEmail(event.target.value);
	}

	const handleChangePassword = (event) => {
		setPassword(event.target.value);
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log("Form submitted!");

		authDispatch({
			type: 'login',
			data: {
				email: email,
				password: password
			}
		})
	}

	useEffect(() => {
		if (authData.long || authData.short) {
			navigate("/account");
		}
	}, [authData, navigate]);

	return(
		<div className="logInForm bg-lighter">
			<form onSubmit={handleFormSubmit}>
						<div className="row">
							<div className="column">
								<label>{t("label_email")}</label>
							</div>
							<div className="column">
								<input
									type="text"
									value={email}
									onChange={handleChangeEmail}
								/>
							</div>
						</div>


						<div className="row">
							<div className="column">
								<label>{t("label_password")}</label>
							</div>
							<div className="column">
								<input
									type="password"
									value={password}
									onChange={handleChangePassword}
								/>
							</div>

						</div>

						<div className="row">
							<button type="submit">Submit</button>

						</div>

					</form>
		</div>
	)
}