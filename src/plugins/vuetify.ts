import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import cs from "vuetify/src/locale/cs";

Vue.use(Vuetify);

export default new Vuetify({
  theme: { dark: true },
  lang: { locales: { cs }, current: "cs" }
});
