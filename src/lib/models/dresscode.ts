import type { DresscodeItem } from "./dresscodeitem";

export type Dresscode = {
  title: string ;
  itemsForHer?: DresscodeItem[];
  itemsForHim?: DresscodeItem[];
};
