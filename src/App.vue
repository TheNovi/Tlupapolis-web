<template>
  <div>
    <Header />
    <br />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
:root {
  --background: #1a1a1d;
  --text-color: #dddddd;
  --link-color: #ac1730;
}
body {
  margin: 0;
  padding: 0;
  background: var(--background);
  color: var(--text-color);
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}

a {
  color: var(--link-color);
}
</style>
