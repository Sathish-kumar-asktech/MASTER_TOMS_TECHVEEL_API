const express = require("express");
const ProductCategoryController = require("../../Toms_Techveel_Controller/MasterController/ProductCategoryController");

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

router.get("/GetAllProductCategory", verifytoken, ProductCategoryController.GetAllProductCategory);
router.get("/GetOneProductCategory/:id", verifytoken, ProductCategoryController.GetOneProductCategory);
router.post("/InsertProductCategory", verifytoken, ProductCategoryController.InsertProductCategory);
router.put("/UpdateProductCategory/:id", verifytoken, ProductCategoryController.UpdateProductCategory);
router.delete("/DeleteProductCategory/:id", verifytoken, ProductCategoryController.DeleteProductCategory);

module.exports = {
  Toms_Techveel_Route: router,
};
