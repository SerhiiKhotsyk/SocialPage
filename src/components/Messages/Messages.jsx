import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessagesItem/Message';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);
const minLength2 = minLengthCreator(2);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.messageForm}>
            <Field component={Textarea}
                validate={[maxLength50, minLength2]}
                name='message'
                className={style.message}
                placeholder='Начните вводить сообщение...'/>
            <button className={style.messageButton} >Send Message</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'message'})(MessageForm)

const Messages = (props) => {
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messagesData.map(message => <MessageItem text={message.text} />);

    // const onMessageChange = (event) => {
    //     let text = event.target.value;
    //     props.changeMessage(text);
    // }
    // const onSendMessage = () => {
    //     props.sendMessage();
    // }

    const addNewMessage = (values) => {
        props.sendMessage(values.message)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <MessageReduxForm onSubmit={ addNewMessage } />
            </div>
            {/* <div className={style.send__message}>
                <textarea 
                    className={style.message__text} 
                    placeholder='Начните вводить сообщение...' 
                    value={props.newMessageText}
                    onChange={ onMessageChange }></textarea>
                <button onClick={ onSendMessage }>Send Message</button>
            </div> */}
            
        </div>
    );
}

export default Messages;