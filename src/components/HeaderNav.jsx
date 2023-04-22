import React from 'react';
import { setActiveLink } from '../utils/setActiveLink';

export function HeaderNav({ setMain }) {
  return (
    <div className="header-nav">
      <div
        className="header-nav-link header-nav-link--active"
        onClick={(e) => {
          setActiveLink(e);
          setMain('cash games');
        }}
      >
        <p className="header-nav-link__p--secondary">28 ოქტ. - 7 ნოემ.</p>
        <p className="header-nav-link__p--primary">Cash Games</p>
      </div>
      <div
        className="header-nav-link"
        onClick={(e) => {
          setActiveLink(e);
          setMain('new year series');
        }}
      >
        <p className="header-nav-link__p--secondary">10 - 29 დეკ.</p>
        <p className="header-nav-link__p--primary">New Year Series</p>
      </div>
      <div
        className="header-nav-link"
        onClick={(e) => {
          setActiveLink(e);
          setMain('final stage');
        }}
      >
        <p className="header-nav-link__p--secondary">28 ოქტ. - 7 ნოემ.</p>
        <p className="header-nav-link__p--primary">Final Stage</p>
      </div>
    </div>
  );
}
