import axios from "axios";
import { getSession } from "next-auth/react";

// Private tockanized API call
const privateApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL // our API base URL
})

privateApi.interceptors.request.use(
    async (config) => {
        const session = await getSession();
        if(session && session?.user?.token) {
            config.headers.Authorization = `Bearer ${session?.user?.token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Public API call
const publicApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL // our API base URL
})

publicApi.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export {
    privateApi,
    publicApi,
}