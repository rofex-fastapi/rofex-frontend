import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login.vue";
import Registration from "../views/registration.vue";
import Dashboard from "../views/dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
