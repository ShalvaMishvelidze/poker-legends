import React from 'react';
import { prizes } from '../assets';

export function Prizes({}) {
  return (
    <div className="prizes">
      {prizes.map(({ img, text }, index) => {
        return (
          <div key={index} className="prizes__prize u-position-relative">
            <div className="u-trapez-left"></div>
            <img src={img} alt={text} className="prizes__prize__img" />
            <span className="prizes__prize__text">{text}</span>
          </div>
        );
      })}
    </div>
  );
}
