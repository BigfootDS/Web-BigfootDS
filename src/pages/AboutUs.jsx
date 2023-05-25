import { useTranslation } from "react-i18next";
import ScreenFill from "../components/ScreenFill";
import "../styles/About.css"

export default function AboutUs(props) {

	// These should match keys in the localisation spreadsheet, not normal words/phrases
	const servicesLabels = [
		"service_gamedev",
		"service_webfullstack",
		"service_webfrontend",
		"service_webbackend",
		"service_gameliveops",
		"service_gamebackend",
		"service_devops",
		"service_graphicdesign",
		"service_videoediting",
	]

	const toolLabels = [
		"tool_unity",
		"tool_csharp",
		"tool_ecs",
		"tool_javascript",
		"tool_nodejs",
		"tool_expressjs",
		"tool_reactjs",
		"tool_mongodb",
		"tool_githubactions"
	]

	const { t } = useTranslation();

	return (
		<ScreenFill>
			<div className="aboutContainer">
				<h1>{t("header_aboutbigfootds")}</h1>

				<div className="row">
					<div className="column aboutContent">


						<section className="aboutBrief">
							<p>{t("content_aboutbrief1")}</p>
							<p>...</p>
							<p>{t("content_aboutbrief2")}</p>
						</section>

						<section className="aboutHistory">
							<h3>{t("header_history")}</h3>
							<p>{t("content_abouthistory1")}</p>
							<p>{t("content_abouthistory2")}</p>
							<p>{t("content_abouthistory3")}</p>
						</section>

						<section className="aboutServices">
							<h3>{t("header_services")}</h3>
							<p>{t("content_aboutservices1")}</p>
							<div className="row">
								<div className="column">

								</div>
								<div className="column">
									<ul>
										{servicesLabels.map((service) => {
											return <li className="serviceItem" key={service}>
												{t(service)}
											</li>
										})}
									</ul>
								</div>
								<div className="column">

								</div>
							</div>

						</section>

						<section className="aboutTools">
							<h3>{t("header_favouredtools")}</h3>
							<p>{t("content_abouttools1")}</p>
							<div className="row">
								<div className="column">

								</div>
								<div className="column">
									<ul>
										{toolLabels.map((tool) => {
											return <li className="toolItem" key={tool}>
												{t(tool)}
											</li>
										})}
									</ul>
								</div>
								<div className="column">

								</div>
							</div>
						</section>
					</div>
				</div>

			</div>
		</ScreenFill>
	)
}