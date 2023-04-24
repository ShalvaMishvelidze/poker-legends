import React from 'react';

export function Deal({ images, gradient }) {
  return (
    <div className="footer-deals-container__deal">
      <div
        className={`footer-deals-container__deal__gradient--${gradient}`}
      ></div>
      <img
        srcSet={images
          .map(({ src, dencity }) => `${src} ${dencity}`)
          .join(', ')}
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
  );
}
