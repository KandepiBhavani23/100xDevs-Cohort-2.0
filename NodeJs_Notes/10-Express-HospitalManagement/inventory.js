import { hospitalData } from "./hospitalData.js";
import express from "express";
const app = express();
import { v4 as uuidv4 } from "uuid";
app.use(express.json());

let medicineInventory = hospitalData.medicalStaff.inventory.medicineInventory;

function isExpired(expirationDate) {
  const currentDate = new Date();
  const expiredDate = new Date(expirationDate);

  return currentDate > expiredDate;
}

function triggerLowStockAlert(medicineName) {
  console.log(`ALERT: Low stock for ${medicineName}. Please restock soon.`);
}

function checkAndUpdateStockStatus(medicine) {
  if (medicine.quantity < 10) {
    triggerLowStockAlert(medicine.name);
  }
}

//********************************************************************************************** */

// Retrieves the medicine inventory with optional filters for expired and low-stock medicines
app.get("/inventory/medicine", (req, res) => {
  const { expired, lowStock } = req.query;

  let filteredMedicineInventory = [...medicineInventory];
  if (expired === "true") {
    filteredMedicineInventory = filteredMedicineInventory.filter((medicine) =>
      isExpired(medicine.expiryDate)
    );
  }

  if (lowStock === "true") {
    filteredMedicineInventory = filteredMedicineInventory.filter(
      (medicine) => medicine.quantity < 10
    );
  }

  res.json({ medicineInventory: filteredMedicineInventory });
});

//********************************************************************************************** */

// Adds a new medicine to the inventory.
app.post("/inventory/medicine", (req, res) => {
  const newMedicine = req.body;

  if (!newMedicine.name || !newMedicine.quantity) {
    return res.status(400).json({
      message:
        "Name and quantity are required for adding a new medicine to the inventory",
    });
  }

  if (newMedicine.quantity < 10) {
    triggerLowStockAlert(newMedicine.name);
  }

  medicineInventory.push(newMedicine);
  res.status(201).json({
    message: "Medicine added to inventory successfully",
    medicine: newMedicine,
  });

  newMedicine.id = uuidv4();
});

//********************************************************************************************** */

//Updates an existing medicine in the inventory.
app.put("/inventory/medicine/:id", (req, res) => {
  const medicineId = req.params.id;
  const updateMedicine = req.body;

  if (!updateMedicine.name && !updateMedicine.quantity) {
    return res.status(400).json({
      message:
        "Name or quantity is required for updating a medicine in the inventory",
    });
  }

  const index = medicineInventory.findIndex(
    (medicine) => medicine.id === medicineId
  );

  if (index !== -1) {
    medicineInventory[index] = {
      ...medicineInventory[index],
      ...updateMedicine,
    };

    checkAndUpdateStockStatus(medicineInventory[index]);
    res.json({
      message: "Medicine updated successfully",
      medicine: medicineInventory[index],
    });
  } else {
    res.status(404).json({ message: "Medicine not found" });
  }
});

//********************************************************************************************** */

//Deletes a medicine from the inventory.
app.delete("/inventory/medicine/:id", (req, res) => {
  const medicineId = req.params.id;
  console.log("Medicine", medicineId);
  console.log(req);
  medicineInventory = medicineInventory.filter(
    (medicine) => medicine.id !== medicineId
  );
  console.log(medicineInventory);
  res.json({
    success: true,
    message: "Successfully deleted the doctor!",
  });
});

app.listen(3003, () => {
  console.log("Server started on port 3003");
});
