import axios from 'axios';

/**
 * @description axios 환경설정
 */
const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

export default request;
