import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import {
  setContacts,
  toggleBookmark,
  setAllBookmarks,
  clearAllBookmarks,
} from "../store/actions";
import API from "./api";
import Contact from "../utils/interfaces/Contact";
import { RootState } from "../store/rootReducer";
import {
  sortByFirstName,
  sortByLastName,
  sortByBirthDate,
} from "../utils/SortingFunctions";

const ContactList: React.FC = () => {
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
        console.log(response.data.Records);
        dispatch(setContacts(response.data.Records));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [dispatch]);

  const handleBookmarkToggle = (Id: string) => {
    dispatch(toggleBookmark(Id));
  };

  const handleBookmarkAll = () => {
    dispatch(setAllBookmarks());
  };

  const handleUnbookmarkAll = () => {
    dispatch(clearAllBookmarks());
  };

  let sortedContacts;
  if (sortOption === "firstName") {
    sortedContacts = [...contacts].sort(sortByFirstName);
  } else if (sortOption === "lastName") {
    sortedContacts = [...contacts].sort(sortByLastName);
  } else if (sortOption === "birthDate") {
    sortedContacts = [...contacts].sort(sortByBirthDate);
  }

  return (
    <div>
      <button onClick={handleBookmarkAll}>Bookmark All</button>
      <button onClick={handleUnbookmarkAll}>Unbookmark All</button>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="firstName">Sort by First Name</option>
        <option value="lastName">Sort by Last Name</option>
        <option value="birthDate">Sort by Birth Date</option>
      </select>
      {sortedContacts &&
        sortedContacts.map((contact: Contact, index: number) => (
          <div key={`${contact.Id}-${index}`}>
            <h2>
              {index + 1}. {contact.FirstName ? contact.FirstName : "N/A"}{" "}
              {contact.LastName ? contact.LastName : "N/A"}
            </h2>
            <p>Email: {contact.Email ? contact.Email : "N/A"}</p>
            <p>Birthday: {contact.BirthDate ? contact.BirthDate : "N/A"}</p>
            <p>Account ID: {contact.Account ? contact.Account.Id : "N/A"}</p>
            <input
              type="checkbox"
              checked={contact.isBookmarked}
              onChange={() => handleBookmarkToggle(contact.Id)}
            />{" "}
            Bookmark
          </div>
        ))}
    </div>
  );
};

export default ContactList;
