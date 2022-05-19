import axios from 'axios';

export const API_URL = 'http://localhost:8080'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!!user?.token) {
        config.headers.Authorization = `Bearer ${user?.token}`
    }
    return config
})

export default $api