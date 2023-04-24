import React from 'react';
import { finalBanner } from '../assets';
import { FestivalCategory } from './FestivalCategory';

export function Festival() {
  return (
    <div className="festival">
      <img
        srcSet=""
        src={finalBanner}
        alt="final banner"
        className="festival__banner"
      />
      <p className="festival__heading--secondary">
        გაემგზავრე The Festival in Malta-ზე!
      </p>
      <p className="festival__heading--primary">
        The Festival Series ტურნირების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს
        პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
      </p>
      <div className="festival__date u-position-relative">
        <div className="u-trapez-left"></div>
        <p className="festival__date__text">
          15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
        </p>
      </div>
      <FestivalCategory />
      <FestivalCategory />
      <FestivalCategory />
    </div>
  );
}
