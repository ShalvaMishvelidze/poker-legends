import React from 'react';
import { example } from '../assets';

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export function CashGamesLeaderboard({}) {
  return (
    <div className="main-cash-games-leaderboard">
      <p className="main-cash-games-leaderboard__heading">
        TOP20 ლიდერბორდი ჰოლდემში
        <img src={example} alt="example" />
      </p>
      <div className="main-cash-games-leaderboard-entry-headers">
        <span>ადგილი</span>
        <span>ვაუჩერი</span>
        <span>პრიზი</span>
      </div>
      <div className="main-cash-games-leaderboard-entry-container">
        {arr.map((id) => {
          return (
            <div
              key={id}
              className="main-cash-games-leaderboard-entry-container__entry"
            >
              <span>{id}</span>
              <span>1 500 ₾</span>
              <span>A კატეგორიის საგზური</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
