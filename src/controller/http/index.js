import axios from "axios";

export const API_URL = "https://my-teamup.ru/api";

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    if (localStorage.getItem("token")) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
            "token"
        )}`;
    }
    return config;
});

api.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config;
        console.log(error);
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.post(
                    API_URL + "/refresh",
                    undefined,
                    { withCredentials: true }
                );
                localStorage.setItem("token", response.data.token);
                api.request(originalRequest);
            } catch (err) {
                console.log("Не авторизован !(Из интерцептора)");
            }
        }
        throw error;
    }
);

export default api;
