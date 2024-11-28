import React, { useState, useEffect } from "react";
import "../styles/Appointments.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [caregivers, setCaregivers] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:1000/appointments").then((res) => res.json()),
      fetch("http://localhost:1000/patients").then((res) => res.json()),
      fetch("http://localhost:1000/caregivers").then((res) => res.json()),
    ]).then(([appointmentsData, patientsData, caregiversData]) => {
      setAppointments(appointmentsData);
      setPatients(patientsData);
      setCaregivers(caregiversData);
    });
  }, []);

  const getPatientName = (id) => patients.find((p) => p.id === id)?.name || "Unknown";
  const getCaregiverName = (id) => caregivers.find((c) => c.id === id)?.name || "Unknown";

  return (
    <div className="appointments">
      <h2>Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Caregiver</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{getPatientName(appointment.patientId)}</td>
              <td>{getCaregiverName(appointment.caregiverId)}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
