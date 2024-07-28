
import type { Event } from "./event.ts";

export type Day = {
  summary:string,
  id: number;
  date: string;
  dayOfWeek: string;
  events: Event[];
  
};
