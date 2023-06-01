import React, { useState, useEffect } from "react";
import API from "./api";
import Contact from "../utils/interfaces/Contact";

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    API.post("/Contact/List", {
      PagingCookie: "",
      PageNumber: 0,
      PageSize: 0,
      TotalCount: 0,
    }).then((response) => {
      console.log(response.data.Records);
      setContacts(response.data.Records);
    });
  }, []);
  return (
    <div>
      {contacts.map((contact, index) => (
        <div key={contact.id}>
          <h2>
            {index + 1}. {contact.FirstName ? contact.FirstName : "N/A"} {contact.LastName ? contact.LastName : "N/A"}
          </h2>
          <p>Email: {contact.Email ? contact.Email : "N/A"}</p>
          <p>Birthday: {contact.BirthDate ? contact.BirthDate : "N/A"}</p>
          <p>Account ID: {contact.Account ? contact.Account.Id : "N/A"}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
