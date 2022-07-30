import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = ({ isLoggedIn, onLogoutButtonClick, email }) => {
  return (
    <header className="header">
      <img src={logo} alt="Логотип сайта Место" className="header__logo" />
      <nav className="header__menu">
        {isLoggedIn ? (
          <>
            <p className="header__email">{email}</p>
            <NavLink
              to="/login"
              className="header__link header__link_logged"
              onClick={onLogoutButtonClick}
            >
              Выйти
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/register"
              className="header__link"
              activeStyle={{ display: 'none' }}
            >
              Регистрация
            </NavLink>
            <NavLink
              to="/login"
              className="header__link"
              activeStyle={{ display: 'none' }}
            >
              Войти
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
