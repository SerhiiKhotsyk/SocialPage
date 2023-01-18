import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css';
import FriendsContainer from './Friends/FriendsContainer';

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <nav className={style.menu}>
                <ul>
                    <li>
                        <NavLink to='/profile' className={style.menu__link}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/messages' className={style.menu__link}>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' className={style.menu__link}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to='/news' className={style.menu__link}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to='/music' className={style.menu__link}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sewttings' className={style.menu__link}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={style.friends}>
                <FriendsContainer />
            </div>
        </div>
    )
}

export default Sidebar;