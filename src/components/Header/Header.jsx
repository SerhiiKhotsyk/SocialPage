import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <a href='#' className={style.logo}>
                <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="logo" />
            </a>
            
        </header>
    );
}


export default Header;