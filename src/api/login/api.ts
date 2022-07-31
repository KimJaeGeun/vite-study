import api from '@/plugin/request';
import type { reqLogin, resLogin } from '@/api/login/interface';

const login = async (url: string, reqBody: reqLogin) => {

    const { data } = await api.post<resLogin>(url, reqBody);

    return data;
};

export default login;
