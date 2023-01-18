import axios from "axios";
import React from "react";
import style from './Users.module.css';
import userPhoto from '../../assets/images/userAvatar1.png';

class UsersC extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i += 1) {
            pages.push(i);
        }

        let curP = this.props.currentPage;
        let curPFirst = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPLast = curP + 4;
        let slicedPages = pages.slice( curPFirst, curPLast);
        let firstPage = 1;
        let lastPage = pages.slice(-1);
        
        return <div>
            {
                this.props.users.map(user => <div className={style.users} key={user.id}>
                    <div className={style.userPreview}>
                        <a link='#'><img className={style.userAvatar} src={user.photos.small ? user.photos.small : userPhoto} alt="userAvatar" /></a>
                        {user.followed
                            ? <button className={style.userBtn} onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                            : <button className={style.userBtn} onClick={() => { this.props.follow(user.id) }}>Follow</button>}

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
                {firstPage<=curPFirst && <span onClick={(e) => {this.onPageChanged(firstPage)}}>{firstPage}</span>}
                {firstPage<=curPFirst && <span onClick={(e) => {this.onPageChanged(firstPage)}}>...</span>}
                {slicedPages.map(p => {
                    return <span className={this.props.currentPage === p && style.selectedPage} 
                    onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                })}
                {lastPage>=curPLast+1 && <span onClick={(e) => {this.onPageChanged(lastPage)}}>...</span>}
                {lastPage>=curPLast+1 && <span onClick={(e) => {this.onPageChanged(lastPage)}}>{lastPage}</span>}
            </div>
        </div>
    }
}

export default UsersC;