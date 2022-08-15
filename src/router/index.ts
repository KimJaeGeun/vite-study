import { createRouter, createWebHistory } from 'vue-router'
import validLoginState from '@/global/validLogin';

import ListView from '@/views/ListView.vue';
import LoginView from '@/views/LoginView.vue';
import LoginView2 from '@/views/LoginView2.vue';
import LoginView3 from '@/views/LoginView3.vue';
import InfoView from '@/views/InfoView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/login2',
      name: 'login2',
      component: LoginView2
    },
    {
      path: '/login3',
      name: 'login3',
      component: LoginView3
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView
    },
  ]
});

router.beforeEach((to, from) => {
  // 라우터 변경 시 로그인 여부 확인하여 로그인상태 재설정
  if (to.name !== from.name) {
      validLoginState();
  }
});

export default router
