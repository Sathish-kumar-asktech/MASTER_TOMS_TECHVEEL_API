const express = require("express");
const PurchaseInvoiceController = require("../../Toms_Techveel_Controller/TransactionController/PurchaseInvoiceController");

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

router.get("/GetAllPurchaseInvoice", verifytoken, PurchaseInvoiceController.GetAllPurchaseInvoice);
router.get("/GetAllPurchaseInvoiceMIS", verifytoken, PurchaseInvoiceController.GetAllPurchaseInvoiceMIS);
router.get("/GetOnePurchaseInvoice/:id", verifytoken, PurchaseInvoiceController.GetOnePurchaseInvoice);
router.post("/InsertPurchaseInvoice", verifytoken, PurchaseInvoiceController.InsertPurchaseInvoice);
router.put("/UpdatePurchaseInvoice/:id", verifytoken, PurchaseInvoiceController.UpdatePurchaseInvoice);
router.delete("/DeletePurchaseInvoice/:id", verifytoken, PurchaseInvoiceController.DeletePurchaseInvoice);

module.exports = {
  Toms_Techveel_Route: router,
};
