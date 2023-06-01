import React from "react";
import { useSelector } from "react-redux";
import Contact from "../utils/interfaces/Contact";
import { RootState } from "../store/rootReducer";

const BookmarkedContacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const bookmarkedContacts = contacts.filter(
    (contact: Contact) => contact.isBookmarked
  );

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
            {/* display more details as required */}
          </div>
        ))
      ) : (
        <p>No bookmarked contacts yet.</p>
      )}
    </div>
  );
};

export default BookmarkedContacts;
