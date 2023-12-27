const UOMData = require("../../Toms_Techveel_Data/Masters/UOM");

const GetAllUOM = async (req, res, next) => {
  try {
    const UOMlist = await UOMData.GetAllUOM();
    res.send(UOMlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOneUOM = async (req, res, next) => {
  try {
    const UomID = req.params.id;
    const UOMOne = await UOMData.GetOneUOM(UomID);
    res.send(UOMOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertUOM = async (req, res, next) => {
  try {
    const UOM = req.body;
    const UOMlist = await UOMData.InsertUOM(UOM);
    res.send(UOMlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateUOM = async (req, res, next) => {
  try {
    const UomID = req.params.id;
    const UOM = req.body;
    const UOMlist = await UOMData.UpdateUOM(UomID, UOM);
    res.send(UOMlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteUOM = async (req, res, next) => {
  try {
    const UomID = req.params.id;
    const UOMlist = await UOMData.DeleteUOM(UomID);
    res.send(UOMlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllUOM: GetAllUOM,
  GetOneUOM: GetOneUOM,
  InsertUOM: InsertUOM,
  UpdateUOM: UpdateUOM,
  DeleteUOM: DeleteUOM,
};
