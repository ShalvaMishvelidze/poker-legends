import { SmallerWarningMessage } from './SmallerWarningMessage';
import { WarningMessage } from './WarningMessage';
import { Prizes } from './Prizes';
import { CashGamesLeaderboard } from './CashGamesLeaderboard';
import React from 'react';

const CashGames = () => {
  return (
    <>
      <div className="main-cash-games">
        <div className="main-cash-games__heading">
          <p className="heading-primary">1₾ რეიქი = 1 ქულას</p>
        </div>
        <CashGamesLeaderboard />
        <Prizes />
        <CashGamesLeaderboard />
        <Prizes />
        <SmallerWarningMessage />
      </div>
      <WarningMessage />
    </>
  );
};

export default CashGames;
