import React from "react";
import style from './Message.module.css'

const MessageItem = (props) => {
    
    return <p className={style.message}>
                {props.text}
            </p>
}

export default MessageItem;