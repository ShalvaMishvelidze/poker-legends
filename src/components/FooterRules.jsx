import React from 'react';

export function FooterRules({}) {
  return (
    <>
      <p className="heading-primary heading-primary--helvetica">
        წესები და პირობები
      </p>
      <div className="footer-rules">
        <div className="footer-rules__rule">
          <span>როდის იწყება და რა ფორმატით გაიმართება აქცია</span>
          <div className="u-arrow-down">
            <div></div>
          </div>
        </div>
        <div className="footer-rules__rule">
          <span>როგორ მივიღო აქციაში მონაწილეობა?</span>
          <div className="u-arrow-down">
            <div></div>
          </div>
        </div>
        <div className="footer-rules__rule">
          <span>სხვადასვა</span>
          <div className="u-arrow-down">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
