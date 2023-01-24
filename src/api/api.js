import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'
    },
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


// const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data);
// }

// export const getUsers = (currentPage = 1 , pageSize = 10) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true
//     }).then(response => response.data);
// }
