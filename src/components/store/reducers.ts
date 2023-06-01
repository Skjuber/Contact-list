import { Action } from "../utils/interfaces/Action";
import Contact from "../utils/interfaces/Contact";

const initialState: Contact[] = [];

const contactsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return action.payload;
    case "TOGGLE_BOOKMARK":
      return state.map((contact) =>
        contact.Id === action.payload
          ? { ...contact, isBookmarked: !contact.isBookmarked }
          : contact
      );
    default:
      return state;
  }
};

export default contactsReducer;
