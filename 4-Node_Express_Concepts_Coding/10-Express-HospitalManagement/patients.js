import { hospitalData } from "./hospitalData.js";
import express from "express";
const app = express();
app.use(express.json());

//1. Get the hospital information
app.get("/hospital", (req, res) => {
  const { name, contact, location } = hospitalData?.hospital;
  res.json({
    name,
    location,
    contact,
  });
});

//2. Get all patients
app.get("/patients", (req, res) => {
  const patients = hospitalData?.medicalStaff?.patients;
  res.json({
    patients,
  });
});

//3. Add a new patient
app.post("/patients", (req, res) => {
  const newPatient = req.body;
  console.log("Received data:", newPatient);
  hospitalData?.medicalStaff?.patients.push(newPatient);
  res.json({
    success: true,
    message: "New Patient Added!",
  });
});

//4. Update Patient
app.put("/patients/:id", (req, res) => {
  const patientId = parseInt(req.params.id);
  const updatedPatient = req.body;

  console.log("Received data:", updatedPatient);

  const index = hospitalData?.medicalStaff?.patients.findIndex(
    (patients) => patients.id === patientId
  );

  if (
    hospitalData &&
    hospitalData.medicalStaff &&
    hospitalData.medicalStaff.patients &&
    hospitalData.medicalStaff.patients[index] !== undefined
  ) {
    // Replace the entire patient object with the updated structure
    hospitalData.medicalStaff.patients[index] = updatedPatient;
    res.json({ success: true, message: "Patient updated successfully" });
  } else {
    res.status(500).json({
      success: false,
      message: "Internal Server Error: Unable to update patient",
    });
  }
});

//5. Delete Patient
app.delete("/patients/:id", (req, res) => {
  const patientId = parseInt(req.params.id);
  hospitalData.medicalStaff.patients =
    hospitalData.medicalStaff.patients.filter(
      (patient) => patient.id !== patientId
    );

  res.json({
    success: true,
    message: "Patient Deleted Successfully",
  });
});

//6. Get a Specific Patient By Id
app.get("/patients/:id", (req, res) => {
  const patientId = parseInt(req.params.id);
  const patient = hospitalData.medicalStaff.patients.find(
    (patient) => patient.id === patientId
  );
  if (patient) {
    res.json({
      patient,
    });
  } else {
    res.status(404).json({
      message: "Patient not found",
    });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
