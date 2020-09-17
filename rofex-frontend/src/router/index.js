import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import(/* webpackChunkName: "login" */ '../views/registration.vue'),
    meta: {
      requiresAuth: false,
    },    
  },{
    path: "/dashboard",
    name: "Dashboard",
    component: () => import(/* webpackChunkName: "login" */ '../components/Dashboard/dashboard.vue'),
    meta: {
      requiresAuth: false,
    },}
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
