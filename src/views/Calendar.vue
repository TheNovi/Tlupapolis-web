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
// import interactionPlugin from "@fullcalendar/interaction";

@Component({ components: { FullCalendar } })
export default class Calendar extends Vue {
  currentEvents: EventInput[] = [
    {
      id: "1",
      title: "All-day event",
      start: new Date().toISOString().replace(/T.*$/, "") + "T12:00:00"
    },
    {
      id: "2",
      title: "Timed event",
      start:
        new Date(2020, 1, 8).toISOString().replace(/T.*$/, "") + "T12:00:00"
    }
  ];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialEvents: this.currentEvents,
    initialView: "dayGridMonth"
  };
}
</script>
