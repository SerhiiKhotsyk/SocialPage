import React from 'react';
import style from './Profile.module.css'
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Wallpaper from './Wallpaper/Wallpaper';

const Profile = (props) => {
    return (
        <div className={style.main}>
            <Wallpaper />
            <ProfileInfo  />
            <Posts 
                postsData={props.state.postsData} 
                dispatch={props.dispatch} 
                newPostText={props.state.newPostText} />
        </div>
    )
}

export default Profile;