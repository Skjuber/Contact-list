import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import './Dashboard.scss';

interface DashboardProps {
  children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({children}) => {
  const location = useLocation();

  return (
    <div className="dashboard">
      <nav>
        <Link to="/" className="home-link">
          {location.pathname === '/' ? <AiFillHome size={24} /> : <AiOutlineHome size={24} />}
        </Link>
      </nav>
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
