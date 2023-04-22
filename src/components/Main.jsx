import React from 'react';
import CashGames from './CashGames';
import NewYearSeries from './NewYearSeries';
import FinalStage from './FinalStage';

const Main = ({ main }) => {
  return (
    <main className="main">
      {main === 'cash games' && <CashGames />}
      {main === 'new year series' && <NewYearSeries />}
      {main === 'final stage' && <FinalStage />}
    </main>
  );
};

export default Main;
