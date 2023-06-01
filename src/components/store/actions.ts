import Contact from "../utils/interfaces/Contact";

export const setContacts = (contacts: Contact[]) => {
  // When contacts are fetched, also get bookmarks from local storage
  const bookmarkIds = JSON.parse(localStorage.getItem('bookmarks') || '[]');
  const contactsWithBookmarks = contacts.map(contact => ({
    ...contact,
    isBookmarked: bookmarkIds.includes(contact.Id)
  }));

  return {
    type: 'SET_CONTACTS',
    payload: contactsWithBookmarks
  };
};

export const toggleBookmark = (contactId: string) => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: 'TOGGLE_BOOKMARK', payload: contactId });
    
    // After state has been updated, save bookmarks to local storage
    const state = getState();
    const bookmarkedContactIds = state.contacts.filter((contact: Contact) => contact.isBookmarked).map((contact: Contact) => contact.Id);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedContactIds));
  };
};
