import React from "react";
import style from './Users.module.css';
import userPhoto from '../../assets/images/userAvatar1.png';
import { NavLink } from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPFirst = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPLast = curP + 4;
    let slicedPages = pages.slice(curPFirst, curPLast);
    let firstPage = 1;
    let lastPage = pages.slice(-1);

    return <div>
        {
            props.users.map(user => <div className={style.users} key={user.id}>
                <div className={style.userPreview}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={style.userAvatar} src={user.photos.small 
                            ? user.photos.small 
                            : userPhoto} alt="userAvatar" />
                    </NavLink>
                    {user.followed
                        ? <button disabled={props.isFollowingProgress.some(id => id === user.id)} 
                        className={style.userBtn} onClick={() => {props.unfollowThunk(user.id)}}>Unfollow</button>
                        : <button disabled={props.isFollowingProgress.some(id => id === user.id)} 
                        className={style.userBtn} onClick={() => {props.followThunk(user.id)}}>Follow</button>}
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

        <div className={style.pages}>
            {(firstPage <= curPFirst) && <span onClick={(e) => { props.onPageChanged(firstPage) }}>{firstPage}</span>}
            {(firstPage <= curPFirst) && <span onClick={(e) => { props.onPageChanged(firstPage) }}>...</span>}
            {slicedPages.map(p => {
                return <span className={props.currentPage === p ? style.selectedPage : null}
                    onClick={(e) => { props.onPageChanged(p) }} key={p.id}>{p}</span>
            })}
            {(lastPage >= curPLast + 1) && <span onClick={(e) => { props.onPageChanged(lastPage) }}>...</span>}
            {(lastPage >= curPLast + 1) && <span onClick={(e) => { props.onPageChanged(lastPage) }}>{lastPage}</span>}
        </div>
    </div>
}


export default Users;