import { useTranslation } from "react-i18next";
import "../styles/GameQuickInfoCard.css";
import { isProd } from "../utils/environmentDetector";

export default function GameQuickInfoCard(props) {

	const {t} = useTranslation();

	let {
		gameAbbreviation, 
		coverArtFilePath, 
		coverArtAltText, 
		gameTitle, 
		releaseDate, 
		platforms, 
		ytIframeString
	} = props;

	return (
		<section className={"gameInfoCard " + gameAbbreviation}>
			{(ytIframeString && isProd()) ? 
			<div className="dangerousDiv" dangerouslySetInnerHTML={{__html:ytIframeString}}>

			</div>
			:
			<picture>
			<source />
			<img src={coverArtFilePath} alt={coverArtAltText} />
			</picture>
			}

			<h1>{gameTitle}</h1>
			<h4>{t("label_releasedate")}: {releaseDate}</h4>
			<h4>{t("label_platforms")}:</h4>
			<ul>
				
				{platforms.map((platform)  => {
					return <li key={gameAbbreviation + "-" + platform.name}>
						{platform.url ? 
						<a href={platform.url} target="_blank" rel="noreferrer" >{platform.name}</a>
						:
						<span>{platform.name}</span>
						}
					</li>
				})}
			</ul>
		</section>
	)
}