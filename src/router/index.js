import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Product from '../views/Product.vue'
import Studio from '../views/Studio.vue'
import Login from '../views/Login.vue'
import Institutions from '../views/Institutions.vue'

// we are in the main
const routes = [
  {
    path: '/',
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
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path: '/user/:id',
    name: 'user',
    component:Shop
  },
  {
    path: '/user/:name/product/:id',
    name: 'product',
    component:Product
  },
  {
    path: '/studio',
    name: 'Studio',
    component:Studio
  },
  {
    path: '/institutions',
    name: 'institutions',
    component:Institutions
  },
  

]





const router = createRouter({
  history: createWebHashHistory(),
  routes,
 scrollBehavior:()=> {
    return { left:0, top:0 }
  }

})


export default router
