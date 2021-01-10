import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Rules from "@/views/Rules.vue";
import Join from "@/views/Join.vue";
import Contact from "@/views/Contact.vue";
import Calendar from "@/views/Calendar.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    meta: {},
    component: Home
  },
  {
    path: "/rules",
    name: "Rules",
    meta: { title: "Pravidla" },
    component: Rules
  },
  {
    path: "/join",
    name: "Join",
    meta: { title: "Jak se Připojit" },
    component: Join
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { title: "Kontakt" },
    component: Contact
  },
  {
    path: "/calendar",
    name: "Calendar",
    meta: { title: "Kalendář" },
    component: Calendar
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
