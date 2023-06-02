import React from "react";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <div className="about-content">
        <p>
          This is a frontend application that retrieves and displays a list of
          contacts from an API. It allows users to view contact details for each
          record.
        </p>
        <p>
          The app displays a list of contacts with their first name, last name,
          birth date, email, and account information.
        </p>
        <p>
          Upon opening the application, you will see a list of contacts
          retrieved from the API. To go back to the list, use the browser's back
          button or navigate to the home page.
        </p>
        <p>
          This is the About page. You can write here about your application,
          your team, or any other information you want to share with users.
        </p>
      </div>
    </div>
  );
};

export default About;
