import React from 'react';
export function Leaderboard({ arr }) {
  return (
    <div className="leaderboard">
      <div className="leaderboard-headers">
        <span>ადგილი</span>
        <span>ვაუჩერი</span>
        <span>პრიზი</span>
      </div>
      <div className="leaderboard-container">
        {arr.map((id) => {
          return (
            <div key={id} className="leaderboard-container__entry">
              <span>{id}</span>
              <span>1 500 ₾</span>
              <span>A კატეგორიის საგზური</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
