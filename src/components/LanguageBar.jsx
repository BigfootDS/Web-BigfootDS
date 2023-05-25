import { useTranslation } from "react-i18next";
import { useLanguageName, useLanguageSelector } from "../contexts/LanguageContext";

export default function LanguageBar(props){

	const { i18n } = useTranslation();

	const activeLanguage = useLanguageName();
	const setActiveLanguage = useLanguageSelector();

	const changeActiveLanguage = (event) => {
		setActiveLanguage(event.target.value);
	}

	return (
		<div className="languagebar" >
			<h1>🌎</h1>
			<select value={activeLanguage} onChange={changeActiveLanguage}>
				{Object.keys(i18n.services.resourceStore.data).map((lang) => {
					return <option key={lang} value={lang}>{lang.toLocaleUpperCase()}</option>
				})}
			</select>
		</div>
	)
}