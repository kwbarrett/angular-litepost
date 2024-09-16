import { Entry } from "./entry";

export interface EntryWithUser extends Entry {
  lname: string;
  fname: string;
}
