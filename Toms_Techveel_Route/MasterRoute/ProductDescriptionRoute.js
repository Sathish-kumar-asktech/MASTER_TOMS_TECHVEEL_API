const express = require("express");
const ProductDescriptionController = require("../../Toms_Techveel_Controller/MasterController/ProductDescriptionController");

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

router.get("/GetAllProductDescription", verifytoken, ProductDescriptionController.GetAllProductDescription);
router.get("/GetOneProductDescription/:id", verifytoken, ProductDescriptionController.GetOneProductDescription);
router.post("/InsertProductDescription", verifytoken, ProductDescriptionController.InsertProductDescription);
router.put("/UpdateProductDescription/:id", verifytoken, ProductDescriptionController.UpdateProductDescription);
router.delete("/DeleteProductDescription/:id", verifytoken, ProductDescriptionController.DeleteProductDescription);

module.exports = {
  Toms_Techveel_Route: router,
};
