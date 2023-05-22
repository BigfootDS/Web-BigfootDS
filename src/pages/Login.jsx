import { useState } from "react";
import { useAuthDispatch } from "../contexts/AuthContext";

export default function Login(props) {

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

    return (
        <div>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}