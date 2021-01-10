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
  width: 99%;
  text-align: right;
}
</style>
