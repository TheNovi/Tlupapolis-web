<template>
  <div>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FullCalendar, { CalendarOptions, EventInput } from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { namespace } from "vuex-class";
const events = namespace("events");
// https://fullcalendar.io/docs

@Component({ components: { FullCalendar } })
export default class Calendar extends Vue {
  @events.State
  currentEvents!: EventInput[];

  calendarOptions: CalendarOptions = {
    plugins: [listPlugin, dayGridPlugin],
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,listMonth"
    },
    locale: "cs",
    // dayMaxEvents: true, // allow "more" link when too many events
    firstDay: 1
  };

  created() {
    this.calendarOptions.initialEvents = this.currentEvents;
  }
}
</script>
