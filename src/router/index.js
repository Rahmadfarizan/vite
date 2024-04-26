import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue' 
import ResetPin from '../ResetPin.vue' 

const routes = [
  { path: '/', component: Home },
  { path: '/resetpin', component: ResetPin },
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
