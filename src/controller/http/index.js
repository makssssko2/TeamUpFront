import axios from "axios";

export const API_URL = '#';

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use( (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

api.interceptors.response.use((config) => config, async (error) => {
    const originalRequest = error.config;
    if(error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.post(API_URL + '/refresh',undefined,{withCredentials: true});
            localStorage.setItem('token',(response).data.accessToken);
            api.request(originalRequest);
        } catch(err) {
            console.log('Не авторизован !(Из интерцептора)')
        }
    }
    throw error;
})

export default api;
