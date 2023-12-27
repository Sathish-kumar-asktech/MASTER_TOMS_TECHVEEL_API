const express = require("express");
const CompanyController = require("../../Toms_Techveel_Controller/MasterController/CompanyController");

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

router.get("/GetAllCompany", verifytoken, CompanyController.GetAllCompany);
router.get("/GetOneCompany/:id", verifytoken, CompanyController.GetOneCompany);
router.post("/InsertCompany", verifytoken, CompanyController.InsertCompany);
router.put("/UpdateCompany/:id", verifytoken, CompanyController.UpdateCompany);
router.delete("/DeleteCompany/:id", verifytoken, CompanyController.DeleteCompany);

module.exports = {
  Toms_Techveel_Route: router,
};
