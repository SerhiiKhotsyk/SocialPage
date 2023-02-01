import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, minLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import Post from "./Post/Post";
import style from './Posts.module.css';

const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2);

const PorstForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.add__post}>
            <Field component={Textarea}
                name='postText'
                validate={[maxLength10, minLength2]}
                className={style.post__text}
                placeholder='Начните вводить текст...'/>
            <button>Add post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'post'})(PorstForm)



const Posts = (props) => {
    let postsElements = props.postsData.map(post => <Post message={post.message} likes={post.likes} dislikes={post.dislikes} />);

    // const newPostElement = React.createRef();

    // const onAddPost = () => {
    //     props.addPost();
    // }
    // const onPostChange = () => {
    //     const text = newPostElement.current.value;
    //     props.updateNewPostChange(text);
    // }

    const addNewPost = (values) => {
        props.addPost(values.postText)
    } 

    return (
        <div className={style.posts}>
            {/* <div className={style.add__post}>
                <textarea
                    className={style.post__text}
                    placeholder='Начните вводить текст...'
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div> */}
            <PostReduxForm onSubmit={ addNewPost } />
            {postsElements}
        </div>
    );
}

export default Posts;