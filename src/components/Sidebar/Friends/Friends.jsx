import React from "react";
import style from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friendsElements = props.friendsData.map( friend => <Friend src={friend.src} name={friend.name} />);

    return (
        <div>
            <h2 className={style.subtitle}>Friends</h2>
            <div className={style.friends}>
                { friendsElements }
            </div>
        </div>
        
    )
}

export default Friends;