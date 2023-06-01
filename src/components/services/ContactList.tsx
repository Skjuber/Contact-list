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
      console.log(response.data);
      setContacts(response.data.Records);
    });
  }, []);

  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <h2>
            {contact.FirstName} {contact.LastName}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
