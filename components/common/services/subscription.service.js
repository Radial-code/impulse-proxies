import { privateApi, publicApi } from "../apiService";
const PATH = '/subscription';

// Create checkout session
const createCheckoutSession = (payload) => {
    return new Promise((resolve, reject) => {
        try {
            privateApi.post(`${PATH}/createCheckoutSession`, payload).then((data) => {
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
const checkPayment = (sessionId) => {
    return new Promise((resolve, reject) => {
        try {
            privateApi.get(`${PATH}/sessionStatus?session_id=${sessionId}`).then((data) => {
                resolve(data)
            }).catch((e) => {
                reject(e);
            });
        } catch (e) {
            reject(e);
        }
    })
}


export const subscriptionService = {
    createCheckoutSession,
    checkPayment,
}