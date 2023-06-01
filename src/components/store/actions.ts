import Contact from "../utils/interfaces/Contact";

export const setContacts = (contacts: Contact[]) => {
  const bookmarkIds = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  const contactsWithBookmarks = contacts.map((contact) => ({
    ...contact,
    isBookmarked: bookmarkIds.includes(contact.Id),
  }));

  return {
    type: "SET_CONTACTS",
    payload: contactsWithBookmarks,
  };
};

export const toggleBookmark = (contactId: string) => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: "TOGGLE_BOOKMARK", payload: contactId });

    const state = getState();
    const bookmarkedContactIds = state.contacts
      .filter((contact: Contact) => contact.isBookmarked)
      .map((contact: Contact) => contact.Id);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkedContactIds));
  };
};

export const toggleAllBookmarks = () => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: "TOGGLE_ALL_BOOKMARKS" });

    const state = getState();
    const bookmarkedContactIds = state.contacts
      .filter((contact: Contact) => contact.isBookmarked)
      .map((contact: Contact) => contact.Id);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkedContactIds));
  };
};

export const setAllBookmarks = () => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: "SET_ALL_BOOKMARKS" });

    const state = getState();
    const contacts = state.contacts;
    const bookmarkedContactIds = contacts.map((contact: Contact) => contact.Id);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkedContactIds));
  };
};

export const clearAllBookmarks = () => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: "CLEAR_ALL_BOOKMARKS" });

    localStorage.setItem("bookmarks", JSON.stringify([]));
  };
};
