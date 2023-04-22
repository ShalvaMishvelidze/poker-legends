import React from 'react';
import { soon, cashback, jackpot } from '../assets';

export function Deals() {
  return (
    <>
      <div className="footer-deals-container__deal">
        <div className="footer-deals-container__deal__gradient--blue"></div>
        <img
          src={cashback}
          alt="cashback"
          className="footer-deals-container__deal__img"
        />
        <div className="footer-deals-container__deal-p-container">
          <p className="footer-deals-container__deal-p-container__p--primary">
            მიიღე 300% ქეშბ…
          </p>
          <p className="footer-deals-container__deal-p-container__p--secondary">
            retrieve 300% bet amount as real mone…
          </p>
        </div>
      </div>
      <div className="footer-deals-container__deal">
        <div className="footer-deals-container__deal__gradient--orange"></div>

        <img
          src={soon}
          alt="soon"
          className="footer-deals-container__deal__img"
        />
        <div className="footer-deals-container__deal-p-container">
          <p className="footer-deals-container__deal-p-container__p--primary">
            მალე
          </p>
          <p className="footer-deals-container__deal-p-container__p--secondary">
            retrieve 300% bet amount as real money…
          </p>
        </div>
      </div>
      <div className="footer-deals-container__deal">
        <div className="footer-deals-container__deal__gradient--dark-blue"></div>

        <img
          src={jackpot}
          alt="jackpot"
          className="footer-deals-container__deal__img"
        />
        <div className="footer-deals-container__deal-p-container">
          <p className="footer-deals-container__deal-p-container__p--primary">
            მოიგე ჯაკპოტი
          </p>
          <p className="footer-deals-container__deal-p-container__p--secondary">
            retrieve 300% bet amount as real mone…
          </p>
        </div>
      </div>
    </>
  );
}
