import React from "react";
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {
    return <div className={style.dialogs__name}>
                <NavLink to={'/messages/'+props.id}>{props.name}</NavLink>
            </div>
}

export default DialogItem;