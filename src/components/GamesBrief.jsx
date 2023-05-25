import GameQuickInfoCard from "./GameQuickInfoCard";
import "../styles/GamesBrief.css";

export default function GamesBrief(props) {


	return (
		<div className="gamesBriefContainer row">
			<div className="column">
			<GameQuickInfoCard 
			gameAbbreviation="tbb"
			coverArtFilePath=""
			coverArtAltText="The Bestest Beehive game cover art."
			gameTitle="The Bestest Beehive"
			releaseDate="TBA"
			platforms= {["Steam","Nintendo Switch", "Xbox One"]}
			/>
			</div>

			<div className="column">
			<GameQuickInfoCard 
			gameAbbreviation="ppvr"
			// ytIframeString is a modified YouTube video embed 
			ytIframeString= {<span>
				<iframe
				  id="ppvrVideo"
				  src="https://www.youtube-nocookie.com/embed/XTjMiBAlKGg?autoplay=1&amp;mute=1&amp;loop=1&amp;color=333463&amp;title=0&amp;byline=0&amp;portrait=0&amp;playlist=XTjMiBAlKGg"
				  width="100%"
				  height="100%"
				  overflow="hidden"
				  frameBorder="0"
				  webkitallowfullscreen=""
				  mozallowfullscreen=""
				  allowFullScreen=""
				  volume="0"
				  title="Planet Protector VR trailer"
				></iframe>
			  </span>}
			coverArtFilePath=""
			coverArtAltText="Planet Protector VR game cover art."
			gameTitle="Planet Protector VR"
			releaseDate="2017"
			platforms= {["SteamVR","Google Daydream"]}
			/>
			</div>
		</div>
	)
}