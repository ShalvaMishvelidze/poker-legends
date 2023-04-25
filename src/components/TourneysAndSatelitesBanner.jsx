import Clock from './Clock';
import React from 'react';
import { promoLeft, promoLeftBig, promoRight, promoRightBig } from '../assets';

export function TourneysAndSatelitesBanner({ width }) {
	return (
		<div className="tourneys-and-satelites-banner">
			<span className="tourneys-and-satelites-banner__heading">
				ტურნირები და სატელიტები
			</span>
			<div className="tourneys-and-satelites-banner-img-container">
				<span className="tourneys-and-satelites-banner-img-container__heading">
					სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
				</span>
				<Clock />
				<img
					srcSet={`${promoLeft} 87w, ${promoLeftBig} 203w`}
					sizes="(max-width: 679px) 87px, 203px"
					alt="promo image"
					className="tourneys-and-satelites-banner-img-container__img--left"
				/>
				<img
					srcSet={`${promoRight} 87w, ${promoRightBig} 203w`}
					sizes="(max-width: 679px) 87px, 203px"
					alt="promo image"
					className="tourneys-and-satelites-banner-img-container__img--right"
				/>
				{+width > 679 && (
					<>
						<p className="tourneys-and-satelites-banner__warning">
							* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
						</p>
						<p className="tourneys-and-satelites-banner__warning">
							ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
						</p>
						<button className="tourneys-and-satelites__btn">
							პოკერის ლობი
						</button>
					</>
				)}
			</div>
		</div>
	);
}
