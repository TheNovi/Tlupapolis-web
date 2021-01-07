<template>
  <div>
    <FullCalendar class="calendar" :options="calendarOptions" />
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
    buttonText: {
      //   prev: "Dříve",
      //   next: "Později",
      today: "Nyní",
      month: "Měsíc",
      list: "Seznam"
    },
    allDayText: "Celý den",
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
/* Must be non-scoped for some reason
https://github.com/fullcalendar/fullcalendar/blob/master/packages/common/src/styles/vars.css
*/
.calendar {
  --fc-list-event-hover-bg-color: #2a2a2a;

  --fc-page-bg-color: #1a1a1a;
  --fc-neutral-bg-color: transparent;
  --fc-border-color: #555555;

  --fc-button-text-color: #fff;
  --fc-button-bg-color: #fc1730;
  --fc-button-border-color: transparent;
  --fc-button-hover-bg-color: #ff4157;
  --fc-button-hover-border-color: transparent;
  --fc-button-active-bg-color: #a11223;
  --fc-button-active-border-color: transparent;

  --fc-today-bg-color: #292929;
}
</style>
