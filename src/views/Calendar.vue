<template>
  <div>
    <v-container fluid>
      <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn text @click="today">
        Nyní
      </v-btn>
      <v-btn text @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-container>
    <v-calendar
      ref="calendar"
      v-model="focus"
      :weekdays="[1, 2, 3, 4, 5, 6, 0]"
      :type="type"
      :events="currentEvents"
      @click:event="showEvent"
      @click:more="viewDay"
      @click:date="viewDay"
    />
    <v-menu
      v-model="selectedOpen"
      :close-on-content-click="false"
      :activator="selectedElement"
      offset-x
    >
      <v-card min-width="350px" flat>
        <v-toolbar :color="selectedEvent.color" dark>
          <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <span v-html="selectedEvent.details"></span>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="selectedOpen = false">
            Zavřít
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import TPEvent from "@/model/TPEvent";
const events = namespace("events");

@Component
export default class Calendar extends Vue {
  @events.State
  currentEvents!: Array<TPEvent>;

  selectedEvent = {} as TPEvent;
  selectedOpen = false;
  selectedElement: EventTarget | null = null;

  focus = "";
  type = "month"; //["month", "week", "4day", "day", "category"]

  showEvent({
    nativeEvent,
    event
  }: {
    nativeEvent: MouseEvent;
    event: TPEvent;
  }) {
    const open = () => {
      this.selectedEvent = event;
      this.selectedElement = nativeEvent.target;
      setTimeout(() => {
        this.selectedOpen = true;
      }, 10);
    };
    if (this.selectedOpen) {
      this.selectedOpen = false;
      setTimeout(open, 10);
    } else {
      open();
    }
    nativeEvent.stopPropagation();
  }

  viewDay({ date }: { date: string }) {
    this.focus = date;
    // this.type = "day"; // TODO Type switcher
  }

  today() {
    this.focus = "";
  }
  prev() {
    this.calendarInstance.prev();
  }
  next() {
    this.calendarInstance.next();
  }

  mounted() {
    this.calendarInstance.checkChange();
  }

  private get calendarInstance() {
    return this.$refs.calendar as Vue & {
      prev: () => void;
      next: () => void;
      checkChange: () => void;
    };
  }
}
</script>
