import { privateApi, publicApi } from "../apiService";
const PATH = '/channel';

// Get order list
const getChannelData = () => {
    return new Promise((resolve, reject) => {
        try {
            privateApi.get(`${PATH}/checkData`).then((data) => {
                resolve(data)
            }).catch((e) => {
                reject(e);
            });
        } catch (e) {
            reject(e);
        }
    })
}

export const channelService = {
    getChannelData,
}