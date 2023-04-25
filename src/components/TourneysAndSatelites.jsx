import { TourneysAndSatelitesBanner } from './TourneysAndSatelitesBanner';
import React, { useEffect, useState } from 'react';

export function TourneysAndSatelites({}) {
	const [width, setWidth] = useState(window.innerWidth);

	window.addEventListener('resize', () => {
		setWidth(window.innerWidth);
	});

	return (
		<div className="tourneys-and-satelites u-position-relative">
			<div className="u-trapez-top"></div>
			<TourneysAndSatelitesBanner width={width} />
			{+width < 680 && (
				<>
					<p className="tourneys-and-satelites__warning">
						* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
					</p>
					<p className="tourneys-and-satelites__heading">
						ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
					</p>
					<button className="tourneys-and-satelites__btn">
						პოკერის ლობი
					</button>
				</>
			)}
		</div>
	);
}
