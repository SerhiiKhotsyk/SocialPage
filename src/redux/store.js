import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
    _rerenderEntireTree: undefined,
    _state: {
        posts: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likes: '12', dislikes: '3'},
                {id: 2, message: "Hi, it's my first post", likes: '16', dislikes: '5'},
                {id: 3, message: 'Goole, nice item to find something', likes: '6', dislikes: '1'},
                {id: 4, message: 'Hello world!', likes: '20', dislikes: '0'},
            ],
            newPostText: '',
        },
        dialogs: {
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
            newMessageText: '',
        },
        friends: {
            friendsData: [
                {id: 1, name:'Serhii', src: "https://banner2.cleanpng.com/20180615/rtc/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cb002ed52.870627731529056432012.jpg"},
                {id: 2, name:'Tomas', src: 'https://w7.pngwing.com/pngs/522/396/png-transparent-computer-icons-profile-miscellaneous-logo-profile.png'},
                {id: 3, name:'Jeck', src: "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"},
            ],
        },
        sidebar: {},
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.posts = profileReducer(this._state.posts, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._rerenderEntireTree(this._state);

        // if (action.type === ADD_POST) {
        //     const setId = () => {
        //         let lastId = 0;
        //         let postsElements = this._state.posts.postsData;
                
        //         for (let i = 0; i < postsElements.length; i+=1) {
        //             let id = postsElements[i].id;
        //             if (lastId <= id) {
        //                 lastId = id + 1;
        //             }
        //         }  
        //         return lastId; 
        //     }
    
        //     let newPost = {
        //         id: setId(),
        //         message: this._state.posts.newPostText,
        //         likes: '0', 
        //         dislikes: '0',
        //     }
        
        //     this._state.posts.postsData.push(newPost);
        //     this._state.posts.newPostText = '';
        //     this._rerenderEntireTree(this._state);

        // } else if (action.type === UPDATE_POST_TEXT) {
        //     this._state.posts.newPostText = action.text;
        //     this._rerenderEntireTree(this._state);

        // } else if (action.type === UPDATE_MESSAGE_TEXT) {
        //     this._state.dialogs.newMessageText = action.text;
        //     this._rerenderEntireTree(this._state);

        // } else if (action.type === SEND_MESSAGE) {
        //     let t = this._state.dialogs.newMessageText;
        //     this._state.dialogs.newMessageText = '';
        //     this._state.dialogs.messagesData.push({
        //         id: 6,
        //         text: t,
        //     });
        //     this._rerenderEntireTree(this._state);
        // }
    } 

}

export default store;