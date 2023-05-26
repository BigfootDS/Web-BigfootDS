import GameQuickInfoCard from "./GameQuickInfoCard";
import "../styles/GamesBrief.css";
import GameInfo from "../assets/games";

export default function GamesBrief(props) {


	return (
		<div className="gamesBriefContainer row">
			<div className="column">
			<GameQuickInfoCard 
			gameAbbreviation={GameInfo.tbb.gameAbbreviation}
			coverArtFilePath={GameInfo.tbb.coverArtFilePath}
			coverArtAltText={GameInfo.tbb.coverArtAltText}
			gameTitle={GameInfo.tbb.gameTitle}
			releaseDate={GameInfo.tbb.releaseDate}
			platforms= {GameInfo.tbb.platforms}
			/>
			</div>

			<div className="column">
			<GameQuickInfoCard 
			gameAbbreviation={GameInfo.ppvr.gameAbbreviation}
			// ytIframeString is a modified YouTube video embed 
			ytIframeString= {GameInfo.ppvr.ytIframeString}
			coverArtFilePath={GameInfo.ppvr.coverArtFilePath}
			coverArtAltText={GameInfo.ppvr.coverArtAltText}
			gameTitle={GameInfo.ppvr.gameTitle}
			releaseDate={GameInfo.ppvr.releaseDate}
			platforms= {GameInfo.ppvr.platforms}
			/>
			</div>
		</div>
	)
}