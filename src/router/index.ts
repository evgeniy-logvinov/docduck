import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/applications/entry',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [
      {
        path: 'applications',
        name: 'Applications',
        component: () => import(/* webpackChunkName: "applications" */ '@/views/Applications.vue'),
        children: [
          {
            path: 'quizstart',
            name: 'QuizStart',
            component: () => import(/* webpackChunkName: "quizStart" */ '@/views/QuizStart.vue'),
          },
          {
            path: 'quizStart2',
            name: 'QuizStart2',
            component: () => import(/* webpackChunkName: "quizStart2" */ '@/views/QuizStart2.vue'),
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
          {
            path: 'registration',
            name: 'Entry',
            component: () => import(/* webpackChunkName: "registration" */ '@/views/ApplicationsNew.vue'),
          },
          {
            path: 'quiz',
            name: 'RegistrationQuiz',
            component: () => import(/* webpackChunkName: "registrationQuiz" */ '@/views/RegistrationQuiz.vue'),
          },
          {
            path: 'final',
            name: 'Final',
            component: () => import(/* webpackChunkName: "final" */ '@/views/ApplicationsFinal.vue'),
          },
          {
            path: 'warning',
            name: 'Warning',
            component: () => import(/* webpackChunkName: "warning" */ '@/views/ApplicationsFinalWarning.vue'),
          },
          {
            path: 'entry',
            name: 'Entry',
            component: () => import(/* webpackChunkName: "entry" */ '@/views/ApplicationEntry.vue'),
          },
        ],
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'Page404',
    component: () => import(/* webpackChunkName: "public" */ '@/views/Page404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
