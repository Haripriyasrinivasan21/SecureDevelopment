import React, { useState, useEffect } from "react";
import "../styles/Caregivers.css";

const Caregivers = () => {
  const [caregivers, setCaregivers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1000/caregivers")
      .then((response) => response.json())
      .then((data) => setCaregivers(data));
  }, []);

  return (
    <div className="caregivers">
      <h2>Caregivers</h2>
      <ul>
        {caregivers.map((caregiver) => (
          <li key={caregiver.id}>
            {caregiver.name} - {caregiver.isAvailable ? "Available" : "Not Available"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Caregivers;