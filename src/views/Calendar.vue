<template>
  <div>
    <v-container fluid>
      <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn text @click="today">
        Nyní
      </v-btn>
      <v-btn text @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-container>
    <v-calendar
      v-model="focus"
      ref="calendar"
      :weekdays="[1, 2, 3, 4, 5, 6, 0]"
      :type="type"
      :events="currentEvents"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import TPEvent from "@/model/TPEvent";
const events = namespace("events");

@Component
export default class Calendar extends Vue {
  @events.State
  currentEvents!: Array<TPEvent>;

  focus = "";
  type = "month"; //["month", "week", "4day", "day", "category"]

  today() {
    this.focus = "";
  }
  prev() {
    this.calendarInstance.prev();
  }
  next() {
    this.calendarInstance.next();
  }
  private get calendarInstance() {
    return this.$refs.calendar as Vue & {
      prev: () => void;
      next: () => void;
      checkChange: () => void;
    };
  }
}
</script>
