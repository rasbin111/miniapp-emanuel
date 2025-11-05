import axios from 'axios'

const PUBLIC_BASE = `${import.meta.env.VITE_API_BASE_URL}`
const PUBLIC_BASE_TOKEN = `${import.meta.env.VITE_API_BASE_URL}/api/token/refresh/`

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
    const token = localStorage.getItem('access')
    api.defaults.headers.common.Authorization = token || ''
    return api
}

export const getContentData = (url) =>
    api.get(url)

export const getData = (url) =>
    authenticated(api).get(url)

export const editData = (
    url, data
) => authenticated(api).put(url, data)


export const postData = (
    url,
    data,
) => authenticated(api).post(url, data)


export const loginPost = (
    url,
    data,
) => api.post(url, data)