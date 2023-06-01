import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import ContactList from "./services/ContactList";
import ContactDetails from "./services/ContactDetails";
import BookmarkedContacts from "./services/BookmarkedContacts";

const MainRouter: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Link to="/bookmarked">
        <button>View Bookmarked Contacts</button>
      </Link>
      <ContactList />
    </>
  );
};

const Bookmarked: React.FC = () => {
  return <BookmarkedContacts />;
};

export default MainRouter;
