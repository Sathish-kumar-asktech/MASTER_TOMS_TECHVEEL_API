const express = require("express");
const BankController = require("../../Toms_Techveel_Controller/MasterController/BankController");

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

router.get("/GetAllBank", BankController.GetAllBank);
router.get("/GetOneBank/:id", verifytoken, BankController.GetOneBank);
router.post("/InsertBank", verifytoken, BankController.InsertBank);
router.put("/UpdateBank/:id", verifytoken, BankController.UpdateBank);
router.delete("/DeleteBank/:id", verifytoken, BankController.DeleteBank);

module.exports = {
  Toms_Techveel_Route: router,
};
