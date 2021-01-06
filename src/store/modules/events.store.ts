import { EventInput } from "@fullcalendar/vue";
import { VuexModule, Module } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Events extends VuexModule {
  // https://fullcalendar.io/docs/event-parsing
  currentEvents: EventInput[] = [
    {
      title: "All Day",
      start: new Date("1-9-2021"),
      allDay: true,
      color: "red"
    },
    {
      title: "Timed event",
      start: new Date(2021, 0, 8, 18)
    }
  ];
}
