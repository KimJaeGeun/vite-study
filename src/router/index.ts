import { createRouter, createWebHistory } from 'vue-router'
import validLoginState from '@/global/validLogin';

import ListView from '@/views/ListView.vue';
import LoginView from '@/views/LoginView.vue';
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
