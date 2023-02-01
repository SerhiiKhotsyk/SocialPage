import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reduser";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer';
import ThunkMiddleware  from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";


const redusers = combineReducers({
    dialogs: dialogsReducer,
    posts: profileReducer,
    friends: friendsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

let store = createStore(redusers, applyMiddleware(ThunkMiddleware));

export default store;
