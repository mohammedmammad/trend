import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recieve",
    name: "Recieve",
    component: () => import("../views/Recieve.vue"),
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("../views/Details.vue"),
  },
  {
    path: "/recievedetails",
    name: "Recievedetails",
    component: () => import("../views/Recievedetails.vue"),
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/Create.vue"),
  },
  {
    path: "/support",
    name: "Support",
    component: () => import("../views/Support.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../views/History.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
