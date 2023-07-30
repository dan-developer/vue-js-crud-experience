import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:30008/api',
    headers: {
        'Content-type': 'application/json',
    },
})

export default apiClient
