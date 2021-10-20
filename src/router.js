import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'

const routes = [
    { path: '/', component: Home }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
  });
  
export default router;
  