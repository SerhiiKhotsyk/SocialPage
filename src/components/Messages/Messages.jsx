import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessagesItem/Message';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/State';

const Messages = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messagesData.map(message => <MessageItem text={message.text} /> );

    const onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>
            <div className={style.send__message}>
                <textarea 
                    className={style.message__text} 
                    placeholder='Начните вводить сообщение...' 
                    value={props.newMessageText}
                    onChange={ onMessageChange }></textarea>
                <button onClick={ sendMessage }>Send Message</button>
            </div>
        </div>
    );
}

export default Messages;