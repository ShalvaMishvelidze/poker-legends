import { FooterDeals } from './FooterDeals';
import { FooterRules } from './FooterRules';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <FooterRules />
      <FooterDeals />
    </footer>
  );
};

export default Footer;
