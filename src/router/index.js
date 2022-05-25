import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { elementScrollIntoView } from "seamless-scroll-polyfill";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipe/:slug',
    name: 'Recipe',
    component: ()=> import('../views/Recipe.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    elementScrollIntoView(document.getElementById('app'), {
      behavior: 'smooth',
      block:"start"
    })
  }
})

export default router
