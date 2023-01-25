import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from './ProfileInfo.module.css';
import profilePhoto from '../../../assets/images/userAvatar4.webp';
import Status from "./Status/Status";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
            <div className={style.profile}>
                <div className={style.avatar}>
                    <img src={props.profile.photos.large || profilePhoto} alt='avatar'></img>
                </div>
                {/* <div className={style.description}>
                    {props.profile.aboutMe}
                </div> */}
                <Status status='Hello my friends' />
            </div>  
        )
};

export default ProfileInfo;