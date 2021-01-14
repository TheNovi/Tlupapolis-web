<template>
  <div>
    <v-app-bar flat app>
      <div class="headline">
        <div v-resize-text>
          <router-link :to="{ name: 'Home' }" tag="span" style="cursor: pointer"
            >TlupaPolis</router-link
          >
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items wrap>
        <v-btn
          plain
          v-for="(link, i) in links"
          :key="i"
          :to="{ name: link.to }"
          exact
          >{{ link.name }}</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <!-- TODO v-navigation-drawer -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Toolbar extends Vue {
  links = [
    {
      name: "Úvod",
      to: "Home"
    },
    {
      name: "Pravidla",
      to: "Rules"
    },
    {
      name: "Jak se Připojit",
      to: "Join"
    },
    {
      name: "Kalendář akcí",
      to: "Calendar"
    }
  ];
}
</script>

<style scoped></style>
