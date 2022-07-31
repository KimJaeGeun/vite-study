import axios from 'axios';
import intercepter from '@/plugin/intercepter'

/**
 * @description axios 환경설정
 */
const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

intercepter(request);

export default request;
