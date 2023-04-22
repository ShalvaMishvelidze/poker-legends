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
      <p className="section-ny__p">ყოველდღიური ტურნირები და სატელიტები</p>
      <DailyToursAndSatelites />
      <p className="section-ny__warning">
        * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The
        <br />
        Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის
        მისაღებად.
      </p>
      <WarningMessage />
    </section>
  );
};

export default NewYearSeries;
