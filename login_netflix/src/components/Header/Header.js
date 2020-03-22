import React from 'react';
import logo from './../../img/logo.svg';

const Header = () => {
    return (
        <header className="site-header">
            <img src={logo} alt="logo"/>
        </header>
    );
}

export default Header