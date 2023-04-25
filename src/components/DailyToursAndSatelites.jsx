import { Tourney } from './Tourney';
import React from 'react';
export function DailyToursAndSatelites({}) {
	return (
		<div className="daily-tourneys-and-satelites">
			<p className="daily-tourneys-and-satelites__p">
				ყოველდღიური ტურნირები და სატელიტები
			</p>
			<div className="daily-tourneys-and-satelites-tourney-container">
				<Tourney />
				<Tourney />
				<Tourney />
			</div>
			<p className="daily-tourneys-and-satelites__warning">
				* სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
				The
				<br />
				Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
				საგზურის მისაღებად.
			</p>
		</div>
	);
}
