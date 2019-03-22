import React from 'react';
import logo from './logo.svg';

function Header({user}: {user: string}) {
    return (
        <header className="App-header">
            Hello {user}
            <img src={logo} className="App-logo" alt="logo"/>
        </header>
    );
}

export default Header;
