import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import "./Dashboard.scss";
import {
  BsBookmarkStarFill,
  BsBookmarkStar,
  BsInfoCircleFill,
  BsInfoCircle,
} from "react-icons/bs";

interface DashboardProps {
  children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="dashboard">
      <nav>
        <Link to="/" className="home-link">
          {location.pathname === "/" ? (
            <AiFillHome size={24} />
          ) : (
            <AiOutlineHome size={24} />
          )}
          Home
        </Link>
        <Link to="/bookmarked" className="bookmark-link">
          {location.pathname === "/bookmarked" ? (
            <BsBookmarkStarFill size={24} />
          ) : (
            <BsBookmarkStar size={24} />
          )}
          Saved
        </Link>
        <Link to="/about" className="about-link">
          {location.pathname === "/about" ? (
            <BsInfoCircleFill size={24} />
          ) : (
            <BsInfoCircle size={24} />
          )}
          Info
        </Link>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Dashboard;
