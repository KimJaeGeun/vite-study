import Cookies from 'js-cookie';
import api from '@/plugin/request';

function validLoginState () {
    const token = Cookies.get('AUTH_TOKEN') || '';

    if (token) {
        api.defaults.headers.common['AUTH_TOKEN'] = token;
    } else {
        delete api.defaults.headers.common['AUTH_TOKEN'];
    }
}

export default validLoginState;