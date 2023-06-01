import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "./api";
import Contact from "../utils/interfaces/Contact";
import { RouteParams } from "../utils/interfaces/types";

const ContactDetails: React.FC = () => {
  const [contact, setContact] = useState<Contact | null>(null);
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    API.get(`/Contact/Edit/${id}`).then((response) => {
      setContact(response.data);
    });
  }, [id]);

  return contact ? (
    <div>
      <h2>
        {contact.FirstName} {contact.LastName}
      </h2>
    </div>
  ) : null;
};

export default ContactDetails;
