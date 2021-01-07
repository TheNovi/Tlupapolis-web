import { EventInput } from "@fullcalendar/vue";
import { VuexModule, Module } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Events extends VuexModule {
  // https://fullcalendar.io/docs/event-parsing
  currentEvents: EventInput[] = [
    {
      title: "All Day",
      start: new Date("2021-1-9"),
      allDay: true,
      color: "red"
    },
    {
      title: "Timed event",
      start: new Date("2021-1-10 18:00")
    }
  ];
}
