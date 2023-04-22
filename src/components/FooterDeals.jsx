import { Deals } from './Deals';
import React from 'react';

export function FooterDeals({}) {
  return (
    <>
      <p className="heading-primary heading-primary--helvetica">
        მსგავსი აქციები
      </p>
      <div className="footer-deals">
        <div className="footer-deals-container">
          <Deals />
          <Deals />
        </div>
      </div>
    </>
  );
}
