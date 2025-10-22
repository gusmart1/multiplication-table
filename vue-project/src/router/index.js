import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MultiplicationTable from '../views/MultiplicationTable.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/multiplication-table',
    name: 'MultiplicationTable',
    component: MultiplicationTable,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
