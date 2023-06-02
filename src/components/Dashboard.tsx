import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';

interface DashboardProps {
  children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({children}) => {
  return (
    <div className="dashboard">
      <nav>
        <Link to="/bookmarked">
          <button>View Bookmarked Contacts</button>
        </Link>
        {/* Add other navigation links as needed */}
      </nav>
      
      {/* The main content area will be filled by the children */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Dashboard;
