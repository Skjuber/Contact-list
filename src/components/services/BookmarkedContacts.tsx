import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { toggleBookmark, setContacts } from "../store/actions";
import Contact from "../utils/interfaces/Contact";
import { RootState } from "../store/rootReducer";
import { Link } from "react-router-dom";
import API from "./api";
import SortingComponent from "./SortingComponent";
import {
  sortByFirstName,
  sortByLastName,
  sortByBirthDate,
} from "../utils/SortingFunctions";
import "./BookmarkedContacts.scss";
import { BsArrowReturnLeft } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";

const BookmarkedContacts: React.FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector((state: RootState) => state.contacts);

  const [sortOption, setSortOption] = useState("firstName");

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

  let bookmarkedContacts = contacts.filter(
    (contact: Contact) => contact.isBookmarked
  );

  if (sortOption === "firstName") {
    bookmarkedContacts.sort(sortByFirstName);
  } else if (sortOption === "lastName") {
    bookmarkedContacts.sort(sortByLastName);
  } else if (sortOption === "birthDate") {
    bookmarkedContacts.sort(sortByBirthDate);
  }

  const handleBookmarkToggle = (Id: string) => {
    dispatch(toggleBookmark(Id));
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  return (
    <div className="bookmarked-contact-list">
      <Link to="/">
        Return Home <BsArrowReturnLeft />{" "}
      </Link>
      <div className="header-section">
        <div className="list-and-controls">
          <h2 className="list-header">Bookmarked Contacts</h2>
          <SortingComponent onSortChange={handleSortChange} />
        </div>
      </div>

      {bookmarkedContacts.length > 0 ? (
        bookmarkedContacts.map((contact: Contact, index: number) => (
          <div className="contact" key={contact.Id}>
            <h3>
              {index + 1}. {contact.FirstName} {contact.LastName}
            </h3>
            <p>Email: {contact.Email}</p>
            <BsBookmarkStarFill
              className="bookmark-icon BsBookmarkStarFill"
              title="Remove from bookmarked list"
              onClick={() => handleBookmarkToggle(contact.Id)}
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
