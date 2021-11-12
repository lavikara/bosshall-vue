import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/landing_sign_up.vue'
// import SignUp from '../views/sign_up.vue'

const routes = [

  
  {
    path : '/',
    name : 'Home',
    component: Home
  },
  // {
  //   path : "/...",
  //   name : "name",
  //   component : () => import("path")
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
