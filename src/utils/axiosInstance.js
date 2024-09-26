import axios from 'axios';
import LocalStorage from '@/utils/LocalStorage';

const axiosInstance = axios.create({
    baseURL: 'https://api.bigbro.dp.ua/api/',
});

axiosInstance.interceptors.request.use(
    (config) => {
        // Задаємо токен в конфіг axios
        const token = JSON.parse(LocalStorage.getData('JWT_TOKEN'));
        if (token) {
            config.headers.Authorization = `Bearer ${token}` ;
        }

        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    // Якщо токен невалідний - видаляємо та перекидуємо на сторінку логіна
    if (error.response.data.code === "jwt_auth_invalid_token") {
        console.log(error);
        localStorage.removeItem('JWT_TOKEN')
        return window.location.href = '/?popup=login'
    }
    return Promise.reject(error);
});


export default axiosInstance;