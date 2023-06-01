import Contact from "./Contact";

export type Action =
  | { type: "SET_CONTACTS"; payload: Contact[] }
  | { type: "TOGGLE_BOOKMARK"; payload: string }
  | { type: "TOGGLE_ALL_BOOKMARKS" }
  | { type: "SET_ALL_BOOKMARKS" }
  | { type: "CLEAR_ALL_BOOKMARKS" };
