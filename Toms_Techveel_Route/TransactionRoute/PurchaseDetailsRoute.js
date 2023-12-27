const express = require("express");
const PurchaseDetailsController = require("../../Toms_Techveel_Controller/TransactionController/PurchaseDetailsController");

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

router.get("/GetAllPurchaseDetails", verifytoken, PurchaseDetailsController.GetAllPurchaseDetails);
router.get("/GetOnePurchaseDetails/:id", verifytoken, PurchaseDetailsController.GetOnePurchaseDetails);
router.post("/InsertPurchaseDetails", verifytoken, PurchaseDetailsController.InsertPurchaseDetails);
router.put("/UpdatePurchaseDetails/:id", verifytoken, PurchaseDetailsController.UpdatePurchaseDetails);
router.delete("/DeletePurchaseDetails/:id", verifytoken, PurchaseDetailsController.DeletePurchaseDetails);

module.exports = {
  Toms_Techveel_Route: router,
};
