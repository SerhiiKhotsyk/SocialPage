import React from "react";
import style from './Friend.module.css';

const Friend = (props) => {

    return (
        <div className={style.friend}>
            <div className={style.logo}>
                <img src={props.src} alt="" />
            </div>
            <div className={style.name}>
                <a href="#">{props.name}</a>
            </div>
        </div>
    )
}

export default Friend;