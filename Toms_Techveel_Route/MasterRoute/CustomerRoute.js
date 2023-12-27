const express = require("express");
const CustomerController = require("../../Toms_Techveel_Controller/MasterController/CustomerController");

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

router.get("/GetAllCustomer", verifytoken, CustomerController.GetAllCustomer);
router.get("/GetOneCustomer/:id", verifytoken, CustomerController.GetOneCustomer);
router.post("/InsertCustomer", verifytoken, CustomerController.InsertCustomer);
router.put("/UpdateCustomer/:id", verifytoken, CustomerController.UpdateCustomer);
router.delete("/DeleteCustomer/:id", verifytoken, CustomerController.DeleteCustomer);

module.exports = {
  Toms_Techveel_Route: router,
};
