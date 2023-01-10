import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
            <div className={style.profile}>
                <div className={style.avatar}>
                    <img src='https://abrakadabra.fun/uploads/posts/2022-03/1647903560_2-abrakadabra-fun-p-ava-na-telefon-dlya-patsanov-na-android-4.jpg' alt='avatar'></img>
                </div>
                <div className={style.description}>
                    Some description
                </div>
            </div>  
        )
};

export default ProfileInfo;