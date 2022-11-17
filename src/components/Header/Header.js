import React from 'react';
import Logo from '../../components/Logo/Logo';
import './Header.css'




const Header = () => {
    return (
        <div>
            <span className="header" onClick={() => window.scroll (0,0)} >
            <Logo />
            </span>
        </div>
    )
}

export default Header
