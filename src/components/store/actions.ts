import Contact from "../utils/interfaces/Contact";

export const setContacts = (contacts:  Contact[]) => ({
    type: 'SET_CONTACTS',
    payload: contacts
  });

  export const toggleBookmark = (contactId: string) => ({
    type: 'TOGGLE_BOOKMARK',
    payload: contactId,
  });
  