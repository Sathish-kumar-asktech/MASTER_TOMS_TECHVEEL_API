const express = require("express");
const SalesInvoiceController = require("../../Toms_Techveel_Controller/TransactionController/SalesInvoiceController");

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

router.get("/GetAllSalesInvoice", verifytoken, SalesInvoiceController.GetAllSalesInvoice);
router.get("/GetAllSalesInvoiceMIS", verifytoken, SalesInvoiceController.GetAllSalesInvoiceMIS);
router.get("/GetOneSalesInvoice/:id", verifytoken, SalesInvoiceController.GetOneSalesInvoice);
router.post("/InsertSalesInvoice", verifytoken, SalesInvoiceController.InsertSalesInvoice);
router.put("/UpdateSalesInvoice/:id", verifytoken, SalesInvoiceController.UpdateSalesInvoice);
router.delete("/DeleteSalesInvoice/:id", verifytoken, SalesInvoiceController.DeleteSalesInvoice);

module.exports = {
  Toms_Techveel_Route: router,
};
