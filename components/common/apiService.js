import axios from "axios";

// Private tockanized API call
const privateApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL // our API base URL
})

privateApi.interceptors.request.use(
    (config) => {
        const data = JSON.parse(localStorage.getItem('impulseUser')); // Assuming you store the token in localStorage
        if(data && data.token) {
            config.headers.Authorization = `Bearer ${data.token}`
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