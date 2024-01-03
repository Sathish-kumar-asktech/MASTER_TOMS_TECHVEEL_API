const express = require("express");
const StockReportController = require("../../Toms_Techveel_Controller/MISController/StockReportController");

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

router.get(
  "/GetAllMISStockReport",
  verifytoken,
  StockReportController.GetAllMISStockReport
);

module.exports = {
  Toms_Techveel_Route: router,
};
