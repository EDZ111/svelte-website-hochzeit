import type { Guest } from "./guest";
import type { Contact } from "./contact";
import type { Availability } from "./availability";
export type Registration = {
  id:string;
  contact: Contact;
  availability:Availability;
  guests: Array<Guest>;
  acomodationNeeded:string;
  message:string;
};
