import { privateApi, publicApi } from "../apiService";
const PATH = '/order';

// Get order list
const getOrderList = (sessionId) => {
    return new Promise((resolve, reject) => {
        try {
            privateApi.get(`${PATH}/list`).then((data) => {
                resolve(data)
            }).catch((e) => {
                reject(e);
            });
        } catch (e) {
            reject(e);
        }
    })
}


export const orderService = {
    getOrderList,
}