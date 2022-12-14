import { characterRoute } from '@/characters/routes';
import AboutPage from '@/shared/pages/AboutPage.vue';
import HomePage from '@/shared/pages/HomePage.vue';
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  // public
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  // characters
  // path: '/characters'
  characterRoute,

  // default
  { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
