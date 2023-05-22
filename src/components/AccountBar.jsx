// This is not the full "Account" page found on "/account", 
// this is just the widget in the navbar!

import { useEffect } from "react"
import { useAuth } from "../contexts/AuthContext";
import { useProfile } from "../contexts/ProfileContext";

export default function AccountBar(props){

	const auth = useAuth();
	const profile = useProfile();

	useEffect(() => {
		console.log("Auth value is:\n" + JSON.stringify(auth))
	},[auth]);

	return (
		<div>
			<div>
				{(auth.long || auth.short) && <h3>Logged in!</h3>}
			</div>
			<div>
				{profile.displayName && <h3>{profile.displayName}</h3>}
			</div>
		</div>
	)
}