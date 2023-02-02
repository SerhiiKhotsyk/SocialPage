import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likes: '12', dislikes: '3' },
        { id: 2, message: "Hi, it's my first post", likes: '16', dislikes: '5' },
        { id: 3, message: 'Goole, nice item to find something', likes: '6', dislikes: '1' },
        { id: 4, message: 'Hello world!', likes: '20', dislikes: '0' },
    ],
    // newPostText: '',
    profile: null,
    status: 'Enter your status here',

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
                message: action.newPostText,
                likes: '0',
                dislikes: '0',
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                // newPostText: '',
            };

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text,
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.postId)
            }
        default: return state;
    }
};

export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text });
export const getUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => {return { type: SET_STATUS, status}};

export const getUserProfileThunk = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(getUserProfile(response.data))
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export default profileReducer;