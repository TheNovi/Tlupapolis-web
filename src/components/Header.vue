<template>
  <div id="root">
    <div id="title">TlupaPolis</div>
    <ul>
      <li><router-link :to="{ name: 'Home' }">Úvod</router-link></li>
      <li><router-link :to="{ name: 'Rules' }">Pravidla</router-link></li>
      <li><router-link :to="{ name: 'Join' }">Jak se Připojit</router-link></li>
      <li>
        <router-link :to="{ name: 'Calendar' }">Kalendář akcí</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {}
</script>

<style scoped>
#root {
  background: var(--background);
}

#title {
  color: var(--text-color);
  font-size: 16px; /* fallback */
  font-size: 8vw;
}

ul {
  padding: 0;
  margin: 0;
  padding-top: 1%;
}

ul li {
  padding: 0;
  text-decoration: none;
  display: inline;
  margin: 1%;
}

a {
  font-size: 2vw;
}
</style>
