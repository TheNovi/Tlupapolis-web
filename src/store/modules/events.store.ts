import { EventInput } from "@fullcalendar/vue";
import { VuexModule, Module } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Events extends VuexModule {
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
}
