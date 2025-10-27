import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import MultiplicationTable from '../views/MultiplicationTable.vue';
import MultiplicationTable2 from "../views/MultiplicationTable2.vue";
import AboutMe from "../views/AboutMe.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects/js/multiplication-table',
    name: 'MultiplicationTable',
    component: MultiplicationTable
  },
  {
    path: '/multiplication-table-2',
    name: 'MultiplicationTable2',
    component: MultiplicationTable2
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
