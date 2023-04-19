import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeVue.vue'
import Create from '../views/CreateVue.vue'
import Login from  '../views/LoginVue.vue' 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path:'/',
    name:'Home',
    component:Home
    },
    {
      path:'/create',
      name:'Create',
      component:Create
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})

export default router
