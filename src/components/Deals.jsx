import { Deal } from './Deal';
import React from 'react';
import { soon, cashback, jackpot } from '../assets';

export function Deals() {
  return (
    <>
      <Deal images={cashback} gradient={'blue'} />
      <Deal images={soon} gradient={'orange'} />
      <Deal images={jackpot} gradient={'dark-blue'} />
    </>
  );
}
