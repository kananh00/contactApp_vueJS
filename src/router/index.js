import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddContact from '../views/AddContact.vue'
import SingleContact from '../views/SingleContact'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/contact/:id',
    name: 'SingleContact',
    component: SingleContact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
