import React from "react";
import { addPostActionCreator, updatePostTextActionCreator } from "../../../redux/profile-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

// const PostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//                     const onPostChange = (text) => {
//                         store.dispatch(updatePostTextActionCreator(text));
//                     }

//                     return <Posts updateNewPostChange={onPostChange}
//                         addPost={addPost}
//                         postsData={state.posts.postsData}
//                         newPostText={state.posts.newPostText} />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        postsData: state.posts.postsData,
        newPostText: state.posts.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostChange: (text) => {
            dispatch(updatePostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;