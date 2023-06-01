import React from "react";
import { Provider } from 'react-redux';
import store from "./components/store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./components/services/ContactList";
import ContactDetails from "./components/services/ContactDetails";

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
