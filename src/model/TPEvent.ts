import { VCalendar } from "vuetify/lib";

export interface VCalendarEvent {
  name: string;
  start: string | Date;
  timed: boolean;
  color: string;
  end?: string | Date;
  category?: string;
}

// TODO Constructor
export default interface TPEvent extends VCalendarEvent {
  desc?: string;
  author?: string;
}
