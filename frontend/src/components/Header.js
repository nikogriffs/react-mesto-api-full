import React from 'react';
import { NavLink } from "react-router-dom";
import logoPath from '../images/logo.png';

function Header(props) {
    return (
        <header className="header">
            <img src={logoPath} alt="Логотип сайта Место" className="header__logo" />
            <nav className="header__menu">
                {props.loggedIn ?
                    <>
                        <p className="header__email">{props.email}</p>
                        <NavLink to="/signin" className="header__link header__link_logged" onClick={props.onSignOut} >Выйти</NavLink>
                    </>
                    :
                    <>
                        <NavLink to="/signup" className="header__link" activeStyle={{ display: 'none' }} >Регистрация</NavLink>
                        <NavLink to="/signin" className="header__link" activeStyle={{ display: 'none' }}>Войти</NavLink>
                    </>}
            </nav>
        </header>
    )
}

export default Header;