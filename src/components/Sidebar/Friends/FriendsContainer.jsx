import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";

// const FriendsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => (
//                     <Friends friendsData={store.getState().friends.friendsData}/>
//                 )
//             }
//         </StoreContext.Consumer>
//     ) 
// }

const mapStateToProps = (state) => {
    return {
        friendsData: state.friends.friendsData,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;