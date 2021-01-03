import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Rules from "../views/Rules.vue";
import Join from "../views/Join.vue";
import Calendar from "../views/Calendar.vue";
import Contact from "../views/Contact.vue";

// TODO Auto import
// TODO 404

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/rules",
    name: "Rules",
    component: Rules
  },
  {
    path: "/join",
    name: "Join",
    component: Join
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
