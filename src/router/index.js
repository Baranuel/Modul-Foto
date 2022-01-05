import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Product from '../views/Product.vue'
import Studio from '../views/Studio.vue'

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
    path: '/user',
    name: 'user',
    component:Shop
  },
  {
    path: '/product/:id',
    name: 'product',
    component:Product
  },
  {
    path: '/studio',
    name: 'Studio',
    component:Studio
  },
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
