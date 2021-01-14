<template>
  <div>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <router-link
        :to="{ name: 'Home' }"
        tag="span"
        style="cursor: pointer"
        class="headline"
        >Tlupa<span class="grey--text text--lighten-2">Polis</span></router-link
      >
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          plain
          hidden-ms-and-down
          v-for="(link, i) in links"
          :key="i"
          :to="{ name: link.to }"
          exact
          >{{ link.name }}</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app disable-resize-watcher>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Tlupa<span class="grey--text text--lighten-2">Polis</span>
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item
          link
          exact
          v-for="(link, i) in links"
          :key="i"
          :to="{ name: link.to }"
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Toolbar extends Vue {
  drawer = false;
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
