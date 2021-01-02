import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Rules from "../views/Rules.vue";
import Join from "../views/Join.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pravidla",
    name: "Rules",
    component: Rules
  },
  {
    path: "/pripoj",
    name: "Join",
    component: Join
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
