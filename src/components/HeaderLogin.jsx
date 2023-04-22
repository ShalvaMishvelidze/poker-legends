import React from 'react';
import { logo } from '../assets';

export function HeaderLogin() {
  return (
    <div className="header-login">
      <div className="header-login__left">
        <img src={logo} alt="logo" className="header-login__left__logo" />
      </div>
      <div className="header-login__right">
        <a href="#" className="header-login__right__btn">
          Sign Up
        </a>
        <a href="#" className="header-login__right__btn--active">
          Sign In
        </a>
      </div>
    </div>
  );
}
