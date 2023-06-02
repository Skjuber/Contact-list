import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { toggleBookmark, setContacts } from "../store/actions";
import Contact from "../utils/interfaces/Contact";
import { RootState } from "../store/rootReducer";
import { Link } from "react-router-dom";
import API from "./api";

const BookmarkedContacts: React.FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector((state: RootState) => state.contacts);

  useEffect(() => {
    API.post("/Contact/List", {
      PagingCookie: "",
      PageNumber: 0,
      PageSize: 0,
      TotalCount: 0,
    })
      .then((response) => {
        dispatch(setContacts(response.data.Records));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [dispatch]);

  const bookmarkedContacts = contacts.filter(
    (contact: Contact) => contact.isBookmarked
  );

  const handleBookmarkToggle = (Id: string) => {
    dispatch(toggleBookmark(Id));
  };

  return (
    <div>
      <h2>Bookmarked Contacts</h2>
      <Link to="/">Return Home</Link>
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
    </div>
  );
};

export default BookmarkedContacts;
