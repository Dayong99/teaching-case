import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Login from "../components/Login";
=======
import Home from '../views/Home.vue'
>>>>>>> 955ad59d90991cb0f3bd92d4277d39d6b3f83ad5

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
<<<<<<< HEAD
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
=======
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
>>>>>>> 955ad59d90991cb0f3bd92d4277d39d6b3f83ad5
  }
]

const router = new VueRouter({
  routes
})

export default router
