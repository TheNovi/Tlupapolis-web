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
body {
  margin: 0;
  padding: 0;
  background: #1a1a1d;
  color: #ffeeee;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}

a {
  color: #ac1730;
}
</style>
