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
      start: new Date(2021, 0, 9, 1).toISOString().replace(/T.*$/, "")
    },
    {
      id: "2",
      title: "Timed event",
      start: new Date(2021, 0, 8, 10).toISOString()
    }
  ];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialEvents: this.currentEvents,
    initialView: "dayGridMonth"
  };
}
</script>
