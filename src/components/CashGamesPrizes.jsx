import React from 'react';
import { prizes } from '../assets';

export function CashGamesPrizes({}) {
  return (
    <div className="main-cash-games-prizes">
      {prizes.map(({ img, text }, index) => {
        return (
          <div key={index} className="main-cash-games-prizes__prize">
            <div className="main-cash-games-prizes__prize__trapez-left"></div>
            <img
              src={img}
              alt={text}
              className="main-cash-games-prizes__prize__img"
            />
            <span className="main-cash-games-prizes__prize__text">{text}</span>
          </div>
        );
      })}
    </div>
  );
}
