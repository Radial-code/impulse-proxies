import { publicApi } from "../apiService";
const PATH = '/user';

// Login
const login = (payload) => {
    return new Promise((resolve, reject) => {
        try {
            publicApi.post(`${PATH}/login`, payload).then((data) => {
                resolve(data)
            }).catch((e) => {
                reject(e);
            });
        } catch (e) {
            reject(e);
        }
    })
}


export const authService = {
    login,
}