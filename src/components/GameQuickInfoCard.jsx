import "../styles/GameQuickInfoCard.css";

export default function GameQuickInfoCard(props) {

	let {gameAbbreviation, coverArtFilePath, coverArtAltText, gameTitle, releaseDate, platforms, ytIframeString} = props;

	return (
		<section className={"gameInfoCard " + gameAbbreviation}>
			{ytIframeString ? 
			ytIframeString
			:
			<picture>
			<source />
			<img src={coverArtFilePath} alt={coverArtAltText} />
			</picture>
			}

			<h1>{gameTitle}</h1>
			<h4>Release date: {releaseDate}</h4>
			<h4>Platforms:</h4>
			<ul>
				
				{platforms.map((platform)  => {
					return <li key={platform}>
						{platform}
					</li>
				})}
			</ul>
		</section>
	)
}