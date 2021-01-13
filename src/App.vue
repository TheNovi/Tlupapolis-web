<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>TlupaPolis</h1>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
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
