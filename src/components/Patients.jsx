import React, { useState, useEffect } from "react";
import "../styles/Patients.css";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1000/patients")
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, []);

  return (
    <div className="patients">
      <h2>Patients</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Medical Records</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.address}</td>
              <td>{patient.medicalRecords}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;