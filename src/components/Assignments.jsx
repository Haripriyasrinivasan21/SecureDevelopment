import React, { useState, useEffect } from "react";
import "../styles/Assignments.css";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [caregivers, setCaregivers] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:1000/assignments").then((res) => res.json()),
      fetch("http://localhost:1000/patients").then((res) => res.json()),
      fetch("http://localhost:1000/caregivers").then((res) => res.json()),
    ]).then(([assignmentsData, patientsData, caregiversData]) => {
      setAssignments(assignmentsData);
      setPatients(patientsData);
      setCaregivers(caregiversData);
    });
  }, []);

  const getPatientName = (id) => patients.find((p) => p.id === id)?.name || "Unknown";
  const getCaregiverName = (id) => caregivers.find((c) => c.id === id)?.name || "Unknown";

  return (
    <div className="assignments">
      <h2>Caregiver Assignments</h2>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Caregiver</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{getPatientName(assignment.patientId)}</td>
              <td>{getCaregiverName(assignment.caregiverId)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignments;