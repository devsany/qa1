import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavLink.css";

const MainNavLink = () => {
  return (
    <div className="main-nav-link">
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
