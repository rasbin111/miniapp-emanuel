import axios, { AxiosError } from 'axios'

const PUBLIC_BASE = "http://localhost:8000"
const PUBLIC_BASE_TOKEN = "http://localhost:8000/token/refresh/"

const api = axios.create({
    baseURL: PUBLIC_BASE,
    timeout: 1000000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})


api.interceptors.response.use(
    (response) => {
        if (typeof window !== 'undefined' && response?.data?.access) {
            window.localStorage.setItem('access', 'Bearer ' + response?.data?.access)
        }
        return response
    },
    (error) => {
        const { response } = error
        if (typeof window !== 'undefined' && response?.status === 401) {
            const data = {
                refresh: localStorage.getItem('refresh') || '""',
            }
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
            axios
                .post(PUBLIC_BASE_TOKEN, data, { headers })
                .then((response) => {
                    localStorage.setItem('access', 'Bearer ' + response.data.access)
                })
                .catch(() => {
                    window.localStorage.removeItem('access')
                    window.location.pathname = '/login'
                })
        }
        return Promise.reject(error)
    },
)

const authenticated = (api) => {
    const token = localStorage.getItem('token')
    api.defaults.headers.common.Authorization = token || ''
    return api
}

export const getData = (url) =>
    authenticated(api).get(url)

export const editData = (
    data,
) => authenticated(api).put(url, data)


export const postData = (
    url,
    data,
) => authenticated(api).post(url, data)


export const loginPost = (
    url,
    data,
) => api.post(url, data)