import { createRouter, createWebHistory } from 'vue-router';
import ResetPin from './pages/ResetPIN.vue';
import App from './App.vue';

const routes = [
  { path: '/', component: App },
  { path: '/reset-pin', component: ResetPin }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
