import axios from "axios"

const env = import.meta.env;

axios.defaults.baseURL = `${env.VITE_APP_API_URL}${env.VITE_APP_API_PORT}`;

function request(url, params) {
    return axios.post(`${url}`, params);
}
export default request;
