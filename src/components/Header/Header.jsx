import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
        return (
        
        <header className={style.header}>
            <a href='#' className={style.logo}>
                <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="logo" />
            </a>
            
            <div className={style.login}>
                { props.isAuth 
                ? <div>
                    <p>{props.login}</p>
                </div> 
                : <NavLink to={'/login'}>Login</NavLink>
                
            }
            </div>

        </header>
    );
}


export default Header;