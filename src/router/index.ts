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
        ],
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  // {
  //   path: '*',
  //   name: 'Page404',
  //   component: () => import(/* webpackChunkName: "page404" */ '@/views/Page404.vue'),
  //   meta: { isPublic: true },
  // },
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
