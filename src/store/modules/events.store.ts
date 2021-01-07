import { EventInput } from "@fullcalendar/vue";
import { VuexModule, Module } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Events extends VuexModule {
  // https://fullcalendar.io/docs/event-parsing
  currentEvents: EventInput[] = [
    {
      title: "Založení projektu: TlupaPolis-Web",
      start: new Date("2021-1-2 20:04:27"),
      // allDay: true,
      color: "grey"
    },
    {
      title: "Stránky hostnuté na netlify.com",
      start: new Date("2021-1-3 10:33:35"),
      color: "grey"
    },
    {
      title: "Založení tohoto kalendáře",
      start: new Date("2021-1-7 8:06"),
      color: "grey"
    }
  ];
}
