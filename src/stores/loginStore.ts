import { defineStore } from 'pinia';
import Cookies from 'js-cookie';

import loginApi from '@/api/login/api';
import type { reqLogin } from '@/api/login/interface';
import validLoginState from '@/global/validLogin';

const loginStore = defineStore({
    id: 'login',
    state: () => ({
        userInfo: {
            userId: '',
            userName: '',
            grade: '',
            authToken: '',
        }
    }),
    actions: {
        // 샘플 함수
        async sampleLogin () {
            Cookies.set('AUTH_TOKEN', 'auth');
            validLoginState();
        },
        async login (params: reqLogin) {
            try {
                const response = await loginApi('/api/login', params);

                Cookies.set('AUTH_TOKEN', response.authToken);
                this.userInfo = response;
                validLoginState();

            } catch (e: unknown) {
                if (e instanceof Error) {
                    return e.message;
                }
            }
        },
        logout () {
            Cookies.remove('AUTH_TOKEN');
        },

    }
});

export default loginStore;
