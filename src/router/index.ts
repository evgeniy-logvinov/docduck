import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// import store from '@/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [
      {
        path: '/applications',
        name: 'Applications',
        component: () => import(/* webpackChunkName: "applications" */ '@/views/Applications.vue'),
        children: [
          {
            path: 'new',
            name: 'ApplicationsNew',
            component: () => import(/* webpackChunkName: "applicationsNew" */ '@/views/ApplicationsNew.vue'),
          },
          {
            path: 'all',
            name: 'ApplicationsAll',
            component: () => import(/* webpackChunkName: "applicationsAll" */ '@/views/ApplicationsAll.vue'),
          },
          {
            path: 'test',
            name: 'ApplicationsTest',
            component: () => import(/* webpackChunkName: "applicationsTest" */ '@/views/ApplicationsTest.vue'),
          },
          {
            path: 'test2',
            name: 'ApplicationsTest2',
            component: () => import(/* webpackChunkName: "applicationsTest2" */ '@/views/ApplicationsTest2.vue'),
          },
          {
            path: 'test3',
            name: 'ApplicationsTest3',
            component: () => import(/* webpackChunkName: "applicationsTest3" */ '@/views/ApplicationsTest3.vue'),
          },
          {
            path: 'test4',
            name: 'ApplicationsTest4',
            component: () => import(/* webpackChunkName: "applicationsTest4" */ '@/views/ApplicationsTest4.vue'),
          },
          {
            path: 'questions',
            name: 'Questions',
            component: () => import(/* webpackChunkName: "questions" */ '@/views/ApplicationsQuestions.vue'),
          },
          {
            path: 'simptoms',
            name: 'Simptoms',
            component: () => import(/* webpackChunkName: "simptoms" */ '@/views/ApplicationsSimptoms.vue'),
          },
          {
            path: 'summary',
            name: 'Summary',
            component: () => import(/* webpackChunkName: "summary" */ '@/views/ApplicationsSummary.vue'),
          },
          {
            path: 'reasons',
            name: 'Reasons',
            component: () => import(/* webpackChunkName: "reasons" */ '@/views/ApplicationsReasons.vue'),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log(from);
//   console.log(to);
//   if (to.matched.some((record) => !record.meta.isPublic)) {
//     const loggedIn = localStorage.getItem('user');
//     if (!loggedIn) {
//       console.log('loggedout')
//       store.commit('security/SIGNOUT');
//       next({
//         path: '/signin',
//         query: { redirect: to.fullPath },
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
