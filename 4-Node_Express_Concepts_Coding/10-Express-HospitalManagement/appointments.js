import { hospitalData } from "./hospitalData.js";
import express from "express";
const app = express();

app.use(express.json());
let appointment = hospitalData.medicalStaff.appointments;

//1. Get all appointments

app.get("/appointments", (req, res) => {
  if (appointment) {
    res.json({
      appointment,
    });
  } else {
    res.status(404).json({
      message: "No Records Found",
    });
  }
});

//2. Create New Appointment
app.post("/appointments", (req, res) => {
  let newAppointment = req.body;
  appointment.push(newAppointment);
  res.status(201).json({
    message: "Appointments Created Successfully",
  });
});

//3. Update Appointment
app.put("/appointments/:id", (req, res) => {
  const appointmentId = parseInt(req.params.id);
  const updateAppointment = req.body;

  const index = appointment.findIndex(
    (appoint) => appoint.id !== appointmentId
  );

  console.log("Index:", index);
  console.log("Update Appointment:", updateAppointment);

  if (
    appointment &&
    Array.isArray(appointment) &&
    index >= 0 &&
    index < appointment.length
  ) {
    appointment[index] = updateAppointment;
    res.json({ success: true, message: "Appointment updated successfully" });
  } else {
    console.error("Invalid: Check array and index.");
    res.status(500).json({
      success: false,
      message: "Internal Server Error: Unable to update appointment",
    });
  }
});

//4. Delete Appointemnt
app.delete("/appointments/:id", (req, res) => {
  const appointId = parseInt(req.params.id);
  appointment = appointment.filter(
    (appointment) => appointment.id === appointId
  );
  console.log(appointment);
  res.json({
    message: "Appointments Deleted Successfully",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
