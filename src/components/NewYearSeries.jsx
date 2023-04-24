import { DailyToursAndSatelites } from './DailyToursAndSatelites';
import { NyLeaderboard } from './NyLeaderboard';
import { TourneysAndSatelites } from './TourneysAndSatelites';
import React from 'react';
import { WarningMessage } from './WarningMessage';

const NewYearSeries = () => {
  return (
    <section className="section-ny">
      <TourneysAndSatelites />
      <NyLeaderboard />
      <DailyToursAndSatelites />
      <WarningMessage />
    </section>
  );
};

export default NewYearSeries;
