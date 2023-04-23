import React from 'react';
import { Leaderboard } from './Leaderboard';
import { Prizes } from './Prizes';
import { SmallerWarningMessage } from './SmallerWarningMessage';

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

export function NyLeaderboard() {
  return (
    <div className="section-ny-leaderboard">
      <p className="section-ny-leaderboard__heading u-position-relative">
        <span className="u-trapez-top"></span>
        მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით
      </p>
      <div className="section-ny-leaderboard__toggle">
        <span>ქულების დაგროვების მექანიკა</span>
        <div className="u-arrow-down">
          <div></div>
        </div>
      </div>
      <Leaderboard arr={arr} />
      <Prizes />
      <SmallerWarningMessage />
      <p className="section-ny-leaderboard__warning">
        * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
        სატელიტები
      </p>
    </div>
  );
}
