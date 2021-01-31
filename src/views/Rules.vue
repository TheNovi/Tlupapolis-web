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
}
</script>
