<template>
  <div class="ahoj">
    <Header />
    <br />
    <router-view />
    <br />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {
  // @Watch("$route")
  // changeTitle() {
  //   const t = this.$route.meta.title;
  //   document.title = "TlupaPolis" + (t ? " | " + t : "");
  // }
  // mounted() {
  //   this.changeTitle();
  // }
}
</script>

<style>
:root {
  --bg-color: #1a1a1d;
  --link-color: #7e7e80;
  --color2: #444444;
  --color3: #242424;
  --text-color: #eee;
}

body {
  margin: 0;
  padding: 0;
  background: var(--bg-color);
  color: var(--text-color);
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}

.ahoj {
  height: 100vh;
}

a {
  color: var(--link-color);
}
</style>
