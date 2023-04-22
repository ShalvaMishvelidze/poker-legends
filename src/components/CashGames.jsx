import { SmallerWarningMessage } from './SmallerWarningMessage';
import { WarningMessage } from './WarningMessage';
import { CashGamesPrizes } from './CashGamesPrizes';
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
        <CashGamesPrizes />
        <CashGamesLeaderboard />
        <CashGamesPrizes />
        <SmallerWarningMessage />
      </div>
      <WarningMessage />
    </>
  );
};

export default CashGames;
