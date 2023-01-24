import React from "react";
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, getUsers, onPageChanged, followThunk, unfollowThunk } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        // .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
    }
    onPageChanged = (pageNumber) => {
        this.props.onPageChanged(pageNumber, this.props.pageSize)
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // userAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     });
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloader/> : null}
        <Users  {...this.props} onPageChanged={this.onPageChanged} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        isFollowingProgress: state.users.isFollowingProgress,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow, setUsers, unfollow, getUsers, 
    onPageChanged, followThunk, unfollowThunk
})(UsersAPIComponent);

export default UsersContainer;