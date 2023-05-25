import GamesBrief from "../components/GamesBrief";
import ScreenFill from "../components/ScreenFill";
import "../styles/Homepage.css"

export default function Home(props) {
	return(
		<ScreenFill>
			<div className="homeContainer">
				<h1>Welcome!</h1>
				<div className="row">
					<div className="column homeContent">
						
						<GamesBrief />
					</div>
				</div>
			</div>
		</ScreenFill>
		
	)
}