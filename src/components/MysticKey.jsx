import React from 'react';

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export function MysticKey({}) {
  return (
    <div className="mystic-key">
      <div className="mystic-key-heading u-position-relative">
        <div className="u-trapez-top"></div>
      </div>
      <div className="mystic-key-tourneys">
        {arr.map((item) => {
          return (
            <div key={item} className="mystic-key-tourneys__tourney">
              <div>{item}</div>
              <p>სპეციალური ტურნირი Cashgame Sharks II ადგილი</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
