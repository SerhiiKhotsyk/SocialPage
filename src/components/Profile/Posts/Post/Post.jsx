import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.post__info}>
                <div className={style.avatar}>
                    <img src="https://abrakadabra.fun/uploads/posts/2022-03/1647903560_2-abrakadabra-fun-p-ava-na-telefon-dlya-patsanov-na-android-4.jpg" alt="avatar" />
                </div>
                <div className={style.text}>
                    {props.message}
                </div>
            </div>
            
            <div className={style.buttons}>
                <button className={style.like}>Like <span>{props.likes}</span></button>
                <button className={style.dislike}>Dislike <span>{props.dislikes}</span></button>
            </div>
        </div>
    );
}

export default Post;