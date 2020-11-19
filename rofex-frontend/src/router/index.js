import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login.vue";
import Registration from "../views/registration.vue";
import Dashboard from "../views/dashboard.vue";
import LogOut from "../components/Logout.vue";
import menu from "../views/menu.vue";

import Trades from "../components/trades.vue";
import Table from "../components/table-chart.vue";
import Graphs from "../components/graphs.vue";

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
    path: "/logout",
    name: "logout",
    component: LogOut,
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
  {
    path: "/menu",
    name: "Menu",
    component: menu,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/table",
    name: "Table",
    component: Table,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/graphs",
    name: "Graphs",
    component: Graphs,
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
