import type { Dresscode } from "./dresscode.js";

export type Event={
    id:number,
    time:string,
    theme:string,
    dresscode?:Dresscode,
    location?:string,
    extras?:string,
}