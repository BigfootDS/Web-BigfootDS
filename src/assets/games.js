import TBB_Switch_CoverArt from "./images/GameLogoSwitch-01.png";

const data = {
	ppvr: {
		gameAbbreviation: "PPVR",
		gameTitle: "Planet Protector VR",
		coverArtFilePath: "",
		coverArtAltText: "Planet Protector VR game trailer.",
		releaseDate: 2017,
		platforms: [
			{
				name: "SteamVR",
				url: "https://store.steampowered.com/app/656320/Planet_Protector_VR/"
			}, 
			{
				name: "Google Daydream",
				url: "https://play.google.com/store/apps/details?id=com.BigfootDS.PlanetProtectorVR"
			}
		],
		ytIframeString: `<span>
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
	  </span>`
	},
	tbb: {
		gameAbbreviation: "TBB",
		gameTitle: "The Bestest Beehive",
		coverArtFilePath: TBB_Switch_CoverArt,
		coverArtAltText: "The Bestest Beehive game cover art.",
		releaseDate: "TBA",
		platforms: [
			{
				name: "Steam",
				url: "https://store.steampowered.com/app/749460/The_Bestest_Beehive/"
			}, 
			{
				name: "Nintendo Switch",
				url: ""
			}, 
			{
				name: "Xbox One",
				url: ""
			}
		],
		ytIframeString: ""
	}
}

export default data;