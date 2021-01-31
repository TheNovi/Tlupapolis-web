<template>
  <div>
    <div v-for="(section, i) in rules" :key="i" class="my-4">
      {{ section.name }}
      <v-expansion-panels focusable>
        <v-expansion-panel
          v-for="(paragraph, i) in section.paragraphs"
          :key="i"
        >
          <v-expansion-panel-header>
            {{ paragraph.name }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-for="(point, i) in paragraph.points" :key="i" class="my-2">
              {{ i + 1 }}. {{ point }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div id="footer">
      {{ copyright }}<br />
      Originální soubor:
      <a :href="org_url" target="_blank" rel="noopener noreferrer">zde</a><br />
      Poslední aktualizace {{ update_date }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Section } from "@/model/Rules";
const rules = namespace("rules");

@Component
export default class Rules extends Vue {
  @rules.State
  rules!: Array<Section>;
  @rules.State
  copyright!: string;
  @rules.State
  org_url!: string;
  @rules.State
  update_date!: Date;
}
</script>

<style scoped>
#footer {
  color: grey;
  text-align: right;
}
</style>
