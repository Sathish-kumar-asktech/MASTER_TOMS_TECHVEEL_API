const express = require("express");
const UOMController = require("../../Toms_Techveel_Controller/MasterController/UOMController");

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

router.get("/GetAllUOM", verifytoken, UOMController.GetAllUOM);
router.get("/GetOneUOM/:id", verifytoken, UOMController.GetOneUOM);
router.post("/InsertUOM", verifytoken, UOMController.InsertUOM);
router.put("/UpdateUOM/:id", verifytoken, UOMController.UpdateUOM);
router.delete("/DeleteUOM/:id", verifytoken, UOMController.DeleteUOM);

module.exports = {
  Toms_Techveel_Route: router,
};
