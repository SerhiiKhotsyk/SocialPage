import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Wallpaper from './Wallpaper/Wallpaper';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
    return (
        <div className={style.main}>
            <Wallpaper />
            <ProfileInfo  />
            <PostsContainer store={props.store} />
        </div>
    )
}

export default Profile;