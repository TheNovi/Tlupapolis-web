<template>
  <span v-if="randomName === 1"
    ><span class="grey--text text--lighten-2">New</span> Tlupa<span
      class="grey--text text--lighten-2"
      >Polis</span
    ></span
  >
  <span v-else-if="randomName === 2"
    >Tlupa<span class="grey--text text--lighten-2">Polis</span> v2</span
  >
  <span v-else-if="randomName === 3"
    >Tlupa<span class="grey--text text--lighten-2">Polis</span> 2</span
  >
  <span v-else-if="randomName === 4"
    >Tlupa<span class="grey--text text--lighten-2">Polis</span> 2.0</span
  >
  <span v-else-if="randomName === 5"
    >Tlupa<span class="grey--text text--lighten-2">Polis</span> v2.0</span
  >
  <!-- Including randomName === 0 -->
  <span v-else>Tlupa<span class="grey--text text--lighten-2">Polis</span></span>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
const basic = namespace("basic");

@Component
export default class Title extends Vue {
  @basic.State
  randomName!: number;
}
</script>
