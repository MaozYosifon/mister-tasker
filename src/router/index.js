import { createRouter, createWebHistory } from 'vue-router'
import taskerApp from '../views/tasker-app.vue'
import homePage from '../views/home-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/tasker',
      name: 'tasker-app',
      component: taskerApp
    },
  ]
})

export default router
