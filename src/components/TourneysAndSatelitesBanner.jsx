import Clock from './Clock';
import React from 'react';
import { promoLeft, promoRight } from '../assets';

export function TourneysAndSatelitesBanner({}) {
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
          src={promoLeft}
          alt="promo image"
          className="tourneys-and-satelites-banner-img-container__img--left"
        />
        <img
          src={promoRight}
          alt="promo image"
          className="tourneys-and-satelites-banner-img-container__img--right"
        />
      </div>
    </div>
  );
}
