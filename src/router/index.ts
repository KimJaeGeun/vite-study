import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
  ]
});

// router.beforeEach(beforeEach);
// router.beforeEach(function (to, from, next) {
//   // to: 이동할 url에 해당하는 라우팅 객체
//   if (to.matched.some(function(routeInfo) {
//     return routeInfo.meta.authRequired;
//   })) {
//   } else {
//     next(); // 페이지 전환
//   };
// });

export default router
