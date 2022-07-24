
import { defineStore } from 'pinia';
import { ref } from 'vue';
import Cookies from "js-cookie";


export const loginStore = defineStore('loginStore', () => {
    const userName = ref('');
    const isLogin = ref(false);

    function initState () {
        userName.value = '';
    }

    function login () {
        Cookies.set('Auth_Token', 'login on');
        isLogin.value = Cookies.get('Auth_Token') ? true : false;
        userName.value = 'qwer';
    }
    function logout() {
        Cookies.remove('Auth_Token');
        initState();
    }

    return {userName, isLogin, login, logout}
});