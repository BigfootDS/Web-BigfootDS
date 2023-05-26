import { useAuth } from "../contexts/AuthContext"
import "../styles/AccountCardParent.css";

export default function AccountCardParent(props){

	const authData = useAuth();

	return(
		<div className="accountCardParent row">
			{!authData ? 
				<p>Loading...</p> 
				: 
				<div>
					<h6>{authData?.id}</h6>
					<p>{authData?.isEmailVerified ? "Email verified" : "Email not verified"}</p>
					<p>Date created: {authData?.createdAt ? new Date(Date.parse(authData.createdAt)).toLocaleDateString() : ""}</p>
				</div>
			}
		</div>
	)
}