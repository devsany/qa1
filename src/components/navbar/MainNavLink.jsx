import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MainNavLink.css";

const MainNavLink = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`main-nav-link ${isSidebarOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? "<" : ">"}
      </button>
      <nav className="sidebar">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/Ingest_Data"
            >
              Ingest Data
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/Explore_Data"
            >
              Explore Data
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/Delete_Data"
            >
              Delete Data
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/Configuration"
            >
              Configuration
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavLink;
