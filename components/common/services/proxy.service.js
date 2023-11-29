import { resolve } from "styled-jsx/css";
import { privateApi, publicApi } from "../apiService";
const PATH = '/proxy';

// Get Proxy list
const getProxyList = () => {
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

// create proxy
const createProxy = (payload) =>{
    return new Promise((resolve, reject)=>{
        try{
            privateApi.post(`${PATH}/createProxy`,payload).then((data) => {
                resolve(data)
            }).catch((e) => {
                reject(e);
            });
        }catch(e){
            reject(e);
        }
    })
}

export const proxyService = {
    getProxyList,
    createProxy
}