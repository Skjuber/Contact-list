import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./services/ContactList";
import ContactDetails from "./services/ContactDetails";
import BookmarkedContacts from "./services/BookmarkedContacts";
import Dashboard from "./Dashboard"; // add the path to your Dashboard component
import "./MainRouter.scss";

const MainRouter: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <Dashboard>
                <Home />
              </Dashboard>
            } 
          />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route 
            path="/bookmarked" 
            element={
              <Dashboard>
                <Bookmarked />
              </Dashboard>
            } 
          />
        </Routes>
      </Router>
    </Provider>
  );
};

const Home: React.FC = () => {
  return <ContactList />;
};

const Bookmarked: React.FC = () => {
  return <BookmarkedContacts />;
};

export default MainRouter;
