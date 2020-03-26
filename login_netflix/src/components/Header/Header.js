import React from 'react';
import logo from './../../img/logo.svg';

const Header = () => {
    return (
        <header className="site-header">
            <img src={logo} alt="logo" className="logotipo"/>
        </header>
    );
}

export default Header