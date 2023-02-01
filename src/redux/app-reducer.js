import { setAuthUserDataThunk } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZD_SUCCESS'

let initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESS}
}

export const initializedApp = () => (dispatch)  => {
    let promise = dispatch(setAuthUserDataThunk());

    // promise.then(() => {
    //     dispatch(initializedSuccess())
    // })
    
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;