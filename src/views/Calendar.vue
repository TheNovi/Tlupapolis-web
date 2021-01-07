<template>
  <div class="calendar">
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
      left: "prev,today,next",
      center: "title",
      right: "dayGridMonth,listMonth"
    },
    allDayText: "Celý den",
    buttonText: {
      //   prev: "Dříve",
      //   next: "Později",
      today: "Nyní",
      month: "Měsíc",
      list: "Seznam"
    },
    locale: "cs",
    firstDay: 1,
    height: "auto"
  };

  created() {
    this.calendarOptions.initialEvents = this.currentEvents;
  }
}
</script>

<style>
/* Must be non-scoped for some reason */
:root {
  --fc-list-event-hover-bg-color: #2a2a2a;
}
/* .fc-day-disabled { */
.calendar .fc-cell-shaded {
  background: #1a1a1a;
}

.calendar .fc-col-header-cell {
  background: #1a1a1a;
}
</style>
