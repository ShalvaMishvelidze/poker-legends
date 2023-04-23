import React from 'react';
import { finalPlaneTicket1, finalPlaneTicket2, tickets } from '../assets';

export function Tickets({}) {
  return (
    <div className="tickets">
      <div className="tickets-heading u-position-relative">
        <div className="u-trapez-top"></div>
        <p className="tickets-heading__heading">
          მოიგე საგზური 30 აპრილის ტურნირებზე
        </p>
      </div>
      <div className="tickets-container">
        {tickets.map(({ heading, paragraphs, img, warning }, index) => {
          return (
            <div key={index} className="tickets-container__ticket">
              <p className="tickets-container__ticket__heading">{heading}</p>
              {paragraphs.map((p, index) => {
                return (
                  <p
                    key={index}
                    className="tickets-container__ticket__paragraph"
                  >
                    {p}
                  </p>
                );
              })}
              <img
                src={img === 't1' ? finalPlaneTicket1 : finalPlaneTicket2}
                alt="ticket"
                className="tickets-container__ticket__img"
              />
              {warning && (
                <p className="tickets-container__ticket__warning">{warning}</p>
              )}
            </div>
          );
        })}
      </div>
      <p className="tickets__warning">
        * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings
        ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
      </p>
      <p className="tickets__warning">
        *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
        ბაი-ინის გადახდით.
      </p>
    </div>
  );
}
