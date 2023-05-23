import { useNavigate } from "react-router-dom";
import { useAuth, useAuthDispatch } from "../contexts/AuthContext"
import { useState } from "react";


export default function LogInForm(props){


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

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log("Form submitted!");

		let loginResult = await fetch("https://auth.bigfootds.dev/users/login", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',

				},
				body: JSON.stringify({email: email, password: password})
			}).then((response) => response.json());

		console.log(loginResult);

		authDispatch({
			type: 'login',
			data: loginResult.tokens
		})
	}

	return(
		<div className="logInForm bg-lighter">
			{authData?.long && navigate("/account")}
			<form onSubmit={handleFormSubmit}>
                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                />
                <button type="submit">Log in</button>
            </form>
		</div>
	)
}