import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    meta: {},
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  },
  {
    path: "/rules",
    name: "Rules",
    meta: { title: "Pravidla" },
    component: () => import(/* webpackChunkName: "rules" */ "@/views/Rules.vue")
  },
  {
    path: "/join",
    name: "Join",
    meta: { title: "Jak se Připojit" },
    component: () => import(/* webpackChunkName: "join" */ "@/views/Join.vue")
  },
  {
    path: "/calendar",
    name: "Calendar",
    meta: { title: "Kalendář" },
    component: () =>
      import(/* webpackChunkName: "calendar" */ "@/views/Calendar.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { title: "Kontakt" },
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
