import { RouteConfig } from "vue-router";

/**
 * Automatically imports all the views
 */
const routes: Array<RouteConfig> = [];

const requireModule = require.context("@/views", false, /\.vue$/);

requireModule.keys().forEach(filename => {
  const c = requireModule(filename).default || requireModule(filename);
  routes.push({
    path: "/" + c.name.toLowerCase().replace(/^home$/, ""),
    name: c.name,
    component: c,
    meta: {
      title: c.title
    }
  });
});

export default routes;
