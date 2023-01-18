const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likes: '12', dislikes: '3'},
        {id: 2, message: "Hi, it's my first post", likes: '16', dislikes: '5'},
        {id: 3, message: 'Goole, nice item to find something', likes: '6', dislikes: '1'},
        {id: 4, message: 'Hello world!', likes: '20', dislikes: '0'},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const setId = () => {
                let lastId = 0;
                let postsElements = state.postsData;

                for (let i = 0; i < postsElements.length; i += 1) {
                    let id = postsElements[i].id;
                    if (lastId <= id) {
                        lastId = id + 1;
                    }
                }
                return lastId;
            }

            let newPost = {
                id: setId(),
                message: state.newPostText,
                likes: '0',
                dislikes: '0',
            }
            // let stateCopy = {...state};
            // stateCopy.postsData = [...state.postsData];
            // stateCopy.postsData.push(newPost);
            // stateCopy.newPostText = '';
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text,
            };

        default: return state;
    }
};

export const addPostActionCreator = () => {
    return {type: ADD_POST};
}
export const updatePostTextActionCreator = (t) => {
    return {type: UPDATE_POST_TEXT, text: t};
}

export default profileReducer;