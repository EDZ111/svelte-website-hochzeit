import type { Dresscode } from "./dresscode.js";
import type { Event } from "./event.ts";

export type Day = {
  id: number;
  date: string;
  dayOfWeek: string;
  events: Event[];
  dresscode?: Dresscode;
};
