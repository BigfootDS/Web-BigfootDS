// This is not the full "Account" page found on "/account", 
// this is just the widget in the navbar!

import { useEffect } from "react"
import { useAuth } from "../contexts/AuthContext";
import { useProfile } from "../contexts/ProfileContext";
import { useTranslation } from "react-i18next";

export default function AccountBar(props){

	const auth = useAuth();
	const profile = useProfile();

	const {t} = useTranslation();



	return (
		<div className="accountbar">
			<div>
				{/* TODO: Remove this and rely solely on the profile.displayName. */}
				{(auth.long || auth.short) && <h3>{t("logged_in")}</h3>}
			</div>
			<div>
				{/* TODO: MS-Accounts not yet deployed, this data won't show. */}
				{profile.displayName && <h3>{profile.displayName}</h3>}
			</div>
		</div>
	)
}