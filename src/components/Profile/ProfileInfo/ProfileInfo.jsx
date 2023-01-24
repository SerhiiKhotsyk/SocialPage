import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
            <div className={style.profile}>
                <div className={style.avatar}>
                    <img src={props.profile.photos.large} alt='avatar'></img>
                </div>
                <div className={style.description}>
                    {props.profile.aboutMe}
                </div>
            </div>  
        )
};

export default ProfileInfo;