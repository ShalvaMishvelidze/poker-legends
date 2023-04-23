import { MysticKey } from './MysticKey';
import { Tickets } from './Tickets';
import { Festival } from './Festival';
import React from 'react';

const FinalStage = () => {
  return (
    <div className="section-final">
      <Festival />
      <Tickets />
      <MysticKey />
    </div>
  );
};

export default FinalStage;
