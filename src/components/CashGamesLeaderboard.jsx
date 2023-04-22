import { Leaderboard } from './Leaderboard';
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
      <Leaderboard arr={arr} />
    </div>
  );
}
