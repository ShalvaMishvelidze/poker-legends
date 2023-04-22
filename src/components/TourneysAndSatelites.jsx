import { TourneysAndSatelitesBanner } from './TourneysAndSatelitesBanner';
import React from 'react';

export function TourneysAndSatelites({}) {
  return (
    <div className="tourneys-and-satelites">
      <div className="u-trapez-top"></div>
      <TourneysAndSatelitesBanner />
      <p className="tourneys-and-satelites__warning">
        * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
      </p>
      <p className="tourneys-and-satelites__heading">
        ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
      </p>
      <button className="tourneys-and-satelites__btn">პოკერის ლობი</button>
    </div>
  );
}
