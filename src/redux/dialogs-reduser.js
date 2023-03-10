const SEND_MESSAGE = 'SEND_MESSAGE';
// const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Serhii'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Tomas'},
        {id: 4, name: 'Andrii'},
        {id: 5, name: 'David'},
    ],
    messagesData: [
        {id: 1, text: 'Hello.'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'What are you doing today?'},
        {id: 4, text: 'Today, I going to the cinema.'},
        {id: 5, text: 'And you, what are you doing?'},
    ],
    // newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case UPDATE_MESSAGE_TEXT:
        //     return {
        //         ...state,
        //         newMessageText: action.text,
        //     };
        case SEND_MESSAGE:
            // let t = state.newMessageText;
            return {
                ...state,
                // newMessageText: '',
                messagesData: [...state.messagesData, {id: 7, text: action.message}],
            }
        default:
            return state;
    }
};

export const sendMessageActionCreator = (message) => {
    return {type: SEND_MESSAGE, message};
}
// export const updateMessageTextActionCreator = (t) => {
//     return {type: UPDATE_MESSAGE_TEXT, text: t};
// }


export default dialogsReducer;