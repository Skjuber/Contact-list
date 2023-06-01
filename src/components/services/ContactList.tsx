import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setContacts } from '../store/actions';
import API from "./api";
import Contact from "../utils/interfaces/Contact";
import { RootState } from '../store/rootReducer';



const ContactList: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts);

  console.log(contacts)
  useEffect(() => {
    API.post("/Contact/List", {
      PagingCookie: "",
      PageNumber: 0,
      PageSize: 0,
      TotalCount: 0,
    }).then((response) => {
      console.log(response.data);
    dispatch(setContacts(response.data.Records)); // Dispatching action to set contacts
    }).catch((error) => {
      console.error('There was an error!', error);
    });
  }, [dispatch]);

  return (
    <div>
    
      {contacts && contacts.map((contact: Contact, index: number) =>(
        <div key={`${contact.id}-${index}`}>
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
