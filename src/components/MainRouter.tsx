import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ContactList from "./services/ContactList";
import ContactDetails from "./services/ContactDetails";
import BookmarkedContacts from "./services/BookmarkedContacts";

const MainRouter: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Link to="/bookmarked">
            <button>View Bookmarked Contacts</button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/bookmarked" element={<BookmarkedContacts />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default MainRouter;
