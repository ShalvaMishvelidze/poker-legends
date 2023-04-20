import { HeaderNav } from './HeaderNav';
import { HeaderText } from './HeaderText';
import { HeaderLogin } from './HeaderLogin';
import React from 'react';
import { banner } from '../assets';

const Header = () => {
  return (
    <div className="header">
      <HeaderLogin />
      <img src={banner} alt="banner" className="header__img" />
      <HeaderText />
      <HeaderNav />
    </div>
  );
};

export default Header;
