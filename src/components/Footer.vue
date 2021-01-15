<template>
  <v-footer>
    <v-spacer></v-spacer>
    <v-btn text :to="{ name: 'Contact' }">Kontakt/Pomoc</v-btn>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
