import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs-reduser';
import StoreContext from '../../StoreContex';
import Messages from './Messages';

// const MessagesContainer = () => {
// return (
//     <StoreContext.Consumer>
//         {
//             (store) => {
//                 let state = store.getState();

//                 const changeMessage = (text) => {
//                     store.dispatch(updateMessageTextActionCreator(text));
//                 }
//                 const sendMessage = () => {
//                     store.dispatch(sendMessageActionCreator());
//                 }
//                 return <Messages sendMessage={sendMessage}
//                     changeMessage={changeMessage}
//                     dialogsData={state.dialogs.dialogsData}
//                     messagesData={state.dialogs.messagesData}
//                     newMessageText={state.dialogs.newMessageText} />
//             }
//         }
//     </StoreContext.Consumer>
// )
// }
let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogs.dialogsData,
        messagesData: state.dialogs.messagesData,
        newMessageText: state.dialogs.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeMessage: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }

    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;