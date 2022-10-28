import React from 'react';
import { LanguageContext } from './languageContext';

const Languages = {
	English: { CURRENT_LANGUAGE: 'Current language is: ' },
	Italiano: { CURRENT_LANGUAGE: 'La lingua selezionata è: ' }
};

export class DisplayLanguage extends React.Component {
	render() {
		return (
			<LanguageContext.Consumer>
				{(language) => {
					return (
						<div>
							<p>{Languages[language].CURRENT_LANGUAGE}</p>
							<h1>{language}</h1>
						</div>
					);
				}}
			</LanguageContext.Consumer>
		);
	}
}