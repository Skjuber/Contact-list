import Contact from "./Contact";

export type Action =
  | { type: "SET_CONTACTS"; payload: Contact[] }
  | { type: "TOGGLE_BOOKMARK"; payload: string };
