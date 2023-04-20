import React from 'react';
import { logo } from '../assets';

export function HeaderLogin() {
  return (
    <div className="header-login">
      <div className="header-login-left">
        <img src={logo} alt="logo" className="header-login-left__logo" />
      </div>
      <div className="header-login-right">
        <a href="#" className="btn">
          Sign Up
        </a>
        <a href="#" className="btn btn--active">
          Sign In
        </a>
      </div>
    </div>
  );
}
