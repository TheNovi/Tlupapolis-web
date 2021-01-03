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
  background: #1a1a1d;
  background: linear-gradient(0deg, #1a1a1d, #4e4e50 100%);
}

#title {
  color: #f3073f;
  font-size: 16px; /* fallback */
  font-size: 6vw;
}

ul li {
  text-decoration: none;
  display: inline;
  margin: 1%;
}

a {
  font-size: 1.5vw;
}
</style>
