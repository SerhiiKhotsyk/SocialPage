import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Wallpaper from './Wallpaper/Wallpaper';
import PostsContainer from './Posts/PostsContainer';
import { Navigate } from 'react-router-dom';

const Profile = (props) => {
    
    return (
        <div className={style.main}>
            <Wallpaper />
            <ProfileInfo  profile={props.profile}/>
            <PostsContainer store={props.store} />
        </div>
    )
}

export default Profile;