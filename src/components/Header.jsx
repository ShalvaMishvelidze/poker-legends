import { HeaderNav } from './HeaderNav';
import { HeaderText } from './HeaderText';
import { HeaderLogin } from './HeaderLogin';
import React from 'react';
import { banner } from '../assets';

const Header = ({ setMain }) => {
  return (
    <header className="header">
      <HeaderLogin />
      <img src={banner} alt="banner" className="header__img" />
      <HeaderText />
      <HeaderNav setMain={setMain} />
    </header>
  );
};

export default Header;
