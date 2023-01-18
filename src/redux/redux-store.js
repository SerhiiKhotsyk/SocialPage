import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogs-reduser";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer';


const redusers = combineReducers({
    dialogs: dialogsReducer,
    posts: profileReducer,
    friends: friendsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
});

let store = createStore(redusers);

export default store;
