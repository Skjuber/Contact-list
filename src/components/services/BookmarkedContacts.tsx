import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { toggleBookmark } from "../store/actions";
import Contact from "../utils/interfaces/Contact";
import { RootState } from "../store/rootReducer";
import { Link } from "react-router-dom";

const BookmarkedContacts: React.FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector((state: RootState) => state.contacts);

  const bookmarkedContacts = contacts.filter(
    (contact: Contact) => contact.isBookmarked
  );

  const handleBookmarkToggle = (Id: string) => {
    dispatch(toggleBookmark(Id));
  };

  return (
    <div>
      <h2>Bookmarked Contacts</h2>
      {bookmarkedContacts.length > 0 ? (
        bookmarkedContacts.map((contact: Contact, index: number) => (
          <div key={contact.Id}>
            <h3>
              {index + 1}. {contact.FirstName} {contact.LastName}
            </h3>
            <p>Email: {contact.Email}</p>
            <input
              type="checkbox"
              checked={contact.isBookmarked}
              onChange={() => handleBookmarkToggle(contact.Id)}
            />
            Remove Bookmark
          </div>
        ))
      ) : (
        <p>No bookmarked contacts yet.</p>
      )}
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default BookmarkedContacts;
