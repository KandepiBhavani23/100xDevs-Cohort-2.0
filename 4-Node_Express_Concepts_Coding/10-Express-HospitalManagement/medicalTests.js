import { hospitalData } from "./hospitalData.js";
import express from "express";
const app = express();
import { v4 as uuidv4 } from "uuid";

app.use(express.json());

const medicalTests = hospitalData.medicalStaff.medicalTests;

//********************************************************************************************** */
app.get("/medical-tests", (req, res) => {
  const { patientId, testName } = req.query;
  let filteredMedicalTests = [...medicalTests];

  if (patientId) {
    filteredMedicalTests = filteredMedicalTests.filter(
      (test) => test.patientId === parseInt(patientId)
    );
  }

  if (testName) {
    filteredMedicalTests = filteredMedicalTests.filter(
      (test) => test.testName === testName
    );
  }

  res.json({ medicalTests: filteredMedicalTests });
});

//********************************************************************************************** */

app.post("/medical-tests", (req, res) => {
  const newMedicalTest = req.body;

  // Input Validation:
  if (!newMedicalTest.patientId || !newMedicalTest.testName) {
    return res.status(400).json({
      message: "Patient ID and Test type are Required",
    });
  }

  newMedicalTest.id = uuidv4();

  medicalTests.push(newMedicalTest);
  res.status(201).json({
    message: "Medical test added successfully",
    newMedicalTest,
  });
});

//********************************************************************************************** */

app.put("/medical-tests/:id", (req, res) => {
  const testId = parseInt(req.params.id);
  const updatedMedicalTest = req.body;

  // Input Validation:
  if (!updatedMedicalTest.testName) {
    return res.status(400).json({
      message: "Test Name is required",
    });
  }

  const index = medicalTests.findIndex((test) => test.id === testId);

  if (index !== -1) {
    medicalTests[index] = {
      ...medicalTests[index],
      ...updatedMedicalTest,
    };
    res.json({
      message: "Medical test updated successfully",
      medicalTest: medicalTests[index],
    });
  } else {
    res.status(404).json({ message: "Medical test not found" });
  }
});

//********************************************************************************************** */

app.delete("/medical-tests/:id", (req, res) => {
  const testId = parseInt(req.params.id);
  const index = medicalTests.findIndex((test) => test.id === testId);

  if (index !== -1) {
    medicalTests.splice(index, 1);
    res.json({ message: "Medical test deleted successfully" });
  } else {
    res.status(404).json({ message: "Medical test not found" });
  }
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
