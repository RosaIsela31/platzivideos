import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

import logo from '../static/logo-platzi-video-BW2.png';
import userIcon from '../static/user-icon.png';

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={logo} alt="Platzi Video" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to="/">Cuenta</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;