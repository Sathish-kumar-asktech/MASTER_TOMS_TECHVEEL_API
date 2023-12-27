const express = require("express");
const SupplierController = require("../../Toms_Techveel_Controller/MasterController/SupplierController");

const router = express.Router();
const jwt = require("jsonwebtoken");
function verifytoken(req, res, next) {
  const beareHeader = req.headers["authorization"];
  if (typeof beareHeader != "undefined") {
    const bearer = beareHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(bearerToken, "secretkey", (err, user) => {
      if (err) {
        res.json({ error: "unauthorzhied user" });
      } else {
        next();
      }
    });
  } else {
    res.json({
      error: "Unauthorized user",
    });
  }
}

router.get("/GetAllSupplier", verifytoken, SupplierController.GetAllSupplier);
router.get("/GetOneSupplier/:id", verifytoken, SupplierController.GetOneSupplier);
router.post("/InsertSupplier", verifytoken, SupplierController.InsertSupplier);
router.put("/UpdateSupplier/:id", verifytoken, SupplierController.UpdateSupplier);
router.delete("/DeleteSupplier/:id", verifytoken, SupplierController.DeleteSupplier);

module.exports = {
  Toms_Techveel_Route: router,
};
