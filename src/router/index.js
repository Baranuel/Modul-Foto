import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Product from "../views/Product.vue";
import Studio from "../views/Studio.vue";
import Login from "../views/Login.vue";
import Institutions from "../views/Institutions.vue";
import GDPR from "../views/GDPR.vue";
import ToS from "../views/ToS.vue";
import Contact from "../views/Contact.vue";

// we are in the main
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Modul foto",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "About us",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "User login page",
    },
  },
  {
    path: "/user/:id",
    name: "user",
    component: Shop,
    meta: {
      title: "Test title",
    },
  },
  {
    path: "/user/:name/product/:id",
    name: "product",
    component: Product,
    meta: {
      title: "Test title",
    },
  },
  {
    path: "/studio",
    name: "Studio",
    component: Studio,
    meta: {
      title: "Our studio",
    },
  },
  {
    path: "/institutions",
    name: "institutions",
    component: Institutions,
    meta: {
      title: "Institutions",
    },
  },
  {
    path: "/GDPR",
    name: "GDPR",
    component: GDPR,
    meta: {
      title: "GDRP rules",
    },
  },
  {
    path: "/ToS",
    name: "ToS",
    component: ToS,
    meta: {
      title: "Terms of service",
    },
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact us",
    },
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return { selector: to.hash };
      //Or for Vue 3:
      //return {el: to.hash}
    } else {
      return { x: 0, y: 0 };
    }
  }, 

});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
});

export default router;
