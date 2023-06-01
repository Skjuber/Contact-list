import { Action } from "../utils/interfaces/Action";
import Contact from "../utils/interfaces/Contact";

const initialState: Contact[] = [];

const contactsReducer = (state: Contact[] = initialState, action: Action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return action.payload;
    case "TOGGLE_BOOKMARK":
      return state.map((contact) =>
        contact.Id === action.payload
          ? { ...contact, isBookmarked: !contact.isBookmarked }
          : contact
      );
    case "TOGGLE_ALL_BOOKMARKS":
      return state.map((contact: Contact) => ({
        ...contact,
        isBookmarked: !contact.isBookmarked,
      }));
    case "SET_ALL_BOOKMARKS":
      return state.map((contact: Contact) => ({
        ...contact,
        isBookmarked: true,
      }));
    case "CLEAR_ALL_BOOKMARKS":
      return state.map((contact: Contact) => ({
        ...contact,
        isBookmarked: false,
      }));
    default:
      return state;
  }
};

export default contactsReducer;
