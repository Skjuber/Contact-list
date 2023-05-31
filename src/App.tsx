import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./components/services/ContactList";
import ContactDetails from "./components/services/ContactDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
