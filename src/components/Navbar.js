import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
export const Navbar = () => {
  return (
    <div className="Navbar">
      <h2 className="app-name">
        <Link to={`/`}>IPL T20 Dashboard</Link>
      </h2>
    </div>
  );
};
