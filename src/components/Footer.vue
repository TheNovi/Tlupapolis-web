<template>
  <div>
    <router-link :to="{ name: 'Contact' }">Kontakt/Pomoc</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style scoped>
div {
  /* position: fixed; */
  bottom: 1%;
  width: 99%;
  text-align: right;
}
</style>
