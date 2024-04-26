import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue' // Sesuaikan dengan lokasi file Home.vue Anda
import ResetPin from '../ResetPin.vue' // Sesuaikan dengan lokasi file ResetPin.vue Anda

const routes = [
  { path: '/', component: Home },
  { path: '/reset-pin', component: ResetPin },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  console.log('Navigating to:', to.fullPath);
  next();
});

export default router
