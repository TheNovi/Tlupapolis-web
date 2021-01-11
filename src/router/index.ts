import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    meta: {},
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/rules",
    name: "Rules",
    meta: { title: "Pravidla" },
    component: () => import("@/views/Rules.vue")
  },
  {
    path: "/join",
    name: "Join",
    meta: { title: "Jak se Připojit" },
    component: () => import("@/views/Join.vue")
  },
  {
    path: "/calendar",
    name: "Calendar",
    meta: { title: "Kalendář" },
    component: () => import("@/views/Calendar.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { title: "Kontakt" },
    component: () => import("@/views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
