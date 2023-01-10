import React from "react";
import { addPostActionCreator, updatePostTextActionCreator } from "../../../redux/State";
import Post from "./Post/Post";
import style from './Posts.module.css';

const Posts = (props) => {
    let postsElements = props.postsData.map(post => <Post message={post.message} likes={post.likes} dislikes={post.dislikes}/>);
    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch(updatePostTextActionCreator(text));
    }

    return (
        <div className={style.posts}>
            <div className={style.add__post}>
                <textarea 
                    className={style.post__text} 
                    placeholder='Начните вводить текст...' 
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>
            { postsElements }
        </div>
    );
}

export default Posts;