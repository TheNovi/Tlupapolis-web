<template>
  <v-app>
    <Toolbar />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Toolbar from "@/components/Toolbar.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Toolbar,
    Footer
  }
})
export default class App extends Vue {
  drawer = false;

  @Watch("$route")
  changeTitle() {
    const t = this.$route.meta.title;
    document.title = "TlupaPolis" + (t ? " | " + t : "");
  }
  mounted() {
    this.changeTitle();
  }
}
</script>
