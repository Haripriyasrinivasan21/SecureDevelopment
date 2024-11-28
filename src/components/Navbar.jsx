import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Healthcare System</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/patients">Patients</a>
        <a href="/caregivers">Caregivers</a>
        <a href="/assignments">Assignments</a>
        <a href="/appointments">Appointments</a>
      </div>
    </nav>
  );
};

export default Navbar;