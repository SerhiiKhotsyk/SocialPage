const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    usersData: [
        // {
        //     id: 1,
        //     avatarSrc: userAvatar1,
        //     name: 'Serhii',
        //     location: { city: 'Rivne', country: 'Ukraine' },
        //     status: 'some user text',
        //     followed: true,
        // },
        // {
        //     id: 2,
        //     avatarSrc: userAvatar2,
        //     name: 'Oleksandr',
        //     location: { city: 'Kvasyliv', country: 'Ukraine' },
        //     status: 'I am looking for a job right now',
        //     followed: false,
        // },
        // {
        //     id: 3,
        //     avatarSrc: userAvatar3,
        //     name: 'George',
        //     location: { city: 'New-York', country: 'USA' },
        //     status: 'I like football',
        //     followed: true,
        // },
        // {
        //     id: 4,
        //     avatarSrc: userAvatar4,
        //     name: 'Nicolas',
        //     location: { city: 'Paris', country: 'France' },
        //     status: "texte d'un utilisateur",
        //     followed: true,
        // },
    ],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true,
                        }
                    } else {
                        return user;
                    }

                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false,
                        }
                    } else {
                        return user;
                    }

                }),
            }
            case SET_USERS:
                return {
                    ...state,
                    usersData: action.users,
                    // usersData: [...state.usersData, ...action.users],
                }
            case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.currentPage,
                }
            case TOTAL_COUNT:
                return {
                    ...state,
                    totalUsersCount: action.totalCount,
                }
            case TOGGLE_IS_FETCHING:
                return {
                    ...state,
                    isFetching: action.isFetching,
                }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {type: FOLLOW, userId}
}
export const unfollow = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const setUsers = (users) => {
    return {type: SET_USERS, users}
}
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalUsersCount = (totalCount) => {
    return {type: TOTAL_COUNT, totalCount}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

export default usersReducer;