<template>
  <div>
    Zde bude přehled plánovaných akcí.
    <p>Work in progress</p>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FullCalendar, { CalendarOptions, EventInput } from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import { namespace } from "vuex-class";
const events = namespace("events");

@Component({ components: { FullCalendar } })
export default class Calendar extends Vue {
  @events.State
  currentEvents!: EventInput[];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth"
  };

  created() {
    this.calendarOptions.initialEvents = this.currentEvents;
  }
}
</script>
