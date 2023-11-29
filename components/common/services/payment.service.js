import { privateApi, publicApi } from "../apiService";
const PATH = '/payment';

// Create checkout session
const getSessionForTopUp = (payload) => {
    return new Promise((resolve, reject) => {
        try {
            privateApi.post(`${PATH}/getSessionForTopUp`, payload).then((data) => {
                resolve(data)
            }).catch((e) => {
                reject(e);
            });
        } catch (e) {
            reject(e);
        }
    })
}

// Check payment status
const verifyTopUpPayment = (sessionId) => {
    return new Promise((resolve, reject) => {
        try {
            privateApi.get(`${PATH}/verifyTopUpPayment/${sessionId}`).then((data) => {
                resolve(data)
            }).catch((e) => {
                reject(e);
            });
        } catch (e) {
            reject(e);
        }
    })
}

export const paymentService = {
    getSessionForTopUp,
    verifyTopUpPayment,
}