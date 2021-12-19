import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home_views/home.vue'

const routes = [

  {
    path : '/',
    name : 'Home',
    component: Home,
    children: [
      {
        path: "",
        name: "Signup",
        component: () => import("@/views/home_views/signup")
      },
      {
        path: "/signin",
        name: "Signin",
        component: () => import("@/views/home_views/signin.vue")
      },
      
    ]
  },

  {
    name : "ConfirmEmail",
    path : "/confirm-email",
    component : () => import("@/views/confirmation_views/confirm_email.vue")
  },

  {
    name : "Dashboard",
    path : "/dashboard",
    component : () => import("@/views/dashboard/dashboard.vue"),
    children : [
      {
        path : "",
        name : "Profile",
        component : () => import("@/views/dashboard/profile_setup.vue")
      },
      {
        path : "/channel",
        name : "Channel",
        component : () => import("@/views/dashboard/channel")
      },
      {
        path : "/create_channel",
        name : "CreateChannel",
        component : () => import("@/views/dashboard/create_channel.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
