import TPEvent from "@/model/TPEvent";
import { VuexModule, Module } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Events extends VuexModule {
  currentEvents: Array<TPEvent> = [
    {
      name: "Založení projektu: TlupaPolis-Web",
      start: new Date("2021-1-2 20:04:27"),
      timed: true,
      color: "grey",
      details: "Let's go!"
    },
    {
      name: "Spuštění TlupaPolis 2 serveru",
      start: new Date("2021-1-21 17:00"),
      timed: true,
      color: "pink",
      author: ""
    },
    {
      name: "Craftička",
      start: new Date("2021-1-22 20:00"),
      timed: true,
      color: "green",
      author: "Whaskalmanik"
    },
    {
      name: "Lava Factor",
      start: new Date("2021-1-28 19:00"),
      timed: true,
      color: "green",
      author: "Whaskalmanik, BotmanGOD"
    },
    {
      name: "Hon na draka",
      start: new Date("2021-1-31 17:00"),
      timed: true,
      color: "green",
      author: "Miitch"
    },
    {
      name: "Co na to TlupaPolis",
      start: new Date("2021-2-4 19:00"),
      timed: true,
      color: "green",
      author: "Whaskalmanik"
    }
  ];
}
