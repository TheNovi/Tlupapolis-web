import TPEvent from "@/model/TPEvent";
import { VuexModule, Module } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Events extends VuexModule {
  currentEvents: Array<TPEvent> = [
    {
      name: "Založení projektu: TlupaPolis-Web",
      start: new Date("2021-1-2 20:04:27"),
      timed: true,
      color: "green"
    },
    {
      name: "Stránky hostnuté na netlify.com",
      start: new Date("2021-1-3 10:33:35"),
      timed: true,
      color: "grey"
    },
    {
      name: "Založení starého kalendáře",
      start: new Date("2021-1-7 8:06"),
      timed: true,
      color: "grey"
    }
  ];
}
