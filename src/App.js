import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Patients from "./components/Patients";
import Caregivers from "./components/Caregivers";
import Assignments from "./components/Assignments";
import Appointments from "./components/Appointments";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/caregivers" element={<Caregivers />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
