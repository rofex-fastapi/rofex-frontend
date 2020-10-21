import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login.vue";
import Registration from "../views/registration.vue";
import Dashboard from "../views/dashboard.vue";
import Trades from "../components/trades.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/trades",
    name: "trades",
    component: Trades,
    meta: {
      requiresAuth: false,
    },
  },
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
