import axios from "axios";
import React from "react";
import style from './Users.module.css';
import userPhoto from '../../assets/images/userAvatar1.png';

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });
        }

        // props.setUsers([
        //     {
        //         id: 1,
        //         // avatarSrc: userAvatar1,
        //         name: 'Serhii',
        //         location: { city: 'Rivne', country: 'Ukraine' },
        //         status: 'some user text',
        //         followed: true,
        //     },
        //     {
        //         id: 2,
        //         // avatarSrc: userAvatar2,
        //         name: 'Oleksandr',
        //         location: { city: 'Kvasyliv', country: 'Ukraine' },
        //         status: 'I am looking for a job right now',
        //         followed: false,
        //     },
        //     {
        //         id: 3,
        //         // avatarSrc: userAvatar3,
        //         name: 'George',
        //         location: { city: 'New-York', country: 'USA' },
        //         status: 'I like football',
        //         followed: true,
        //     },
        //     {
        //         id: 4,
        //         // avatarSrc: userAvatar4,
        //         name: 'Nicolas',
        //         location: { city: 'Paris', country: 'France' },
        //         status: "texte d'un utilisateur",
        //         followed: true,
        //     },
    
        // ])
    }
    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map(user => <div className={style.users} key={user.id}>
                <div className={style.userPreview}>
                    <a link='#'><img className={style.userAvatar} src={user.photos.small ? user.photos.small : userPhoto } alt="userAvatar" /></a>
                    { user.followed 
                    ? <button className={style.userBtn} onClick={()=> {props.unfollow(user.id)}}>Unfollow</button> 
                    : <button className={style.userBtn} onClick={()=> {props.follow(user.id)}}>Follow</button>}
                    
                </div>
                <div className={style.userInfo}>
                    <div className={style.userInfo__left}>
                        <p className={style.userName}>{user.name}</p>
                        <p className={style.userStatus}>{user.status}</p>
                    </div>
                    <div className={style.userInfo__right}>
                        {/* <p className={style.userCountry}>{user.location.country},</p> */}
                        {/* <p className={style.userCity}>{user.location.city}</p> */}
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;