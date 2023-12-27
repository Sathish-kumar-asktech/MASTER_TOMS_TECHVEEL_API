const PurchaseDetailsData = require("../../Toms_Techveel_Data/Transactions/PurchaseDetails");

const GetAllPurchaseDetails = async (req, res, next) => {
  try {
    const PurchaseDetailslist = await PurchaseDetailsData.GetAllPurchaseDetails();
    res.send(PurchaseDetailslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOnePurchaseDetails = async (req, res, next) => {
  try {
    const PurchaseDetailsid = req.params.id;
    const PurchaseDetailsOne = await PurchaseDetailsData.GetOnePurchaseDetails(PurchaseDetailsid);
    res.send(PurchaseDetailsOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertPurchaseDetails = async (req, res, next) => {
  try {
    const PurchaseDetails = req.body;
    const PurchaseDetailslist = await PurchaseDetailsData.InsertPurchaseDetails(PurchaseDetails);
    res.send(PurchaseDetailslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdatePurchaseDetails = async (req, res, next) => {
  try {
    const PurchaseDetailsid = req.params.id;
    const PurchaseDetails = req.body;
    const PurchaseDetailslist = await PurchaseDetailsData.UpdatePurchaseDetails(PurchaseDetailsid, PurchaseDetails);
    res.send(PurchaseDetailslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeletePurchaseDetails = async (req, res, next) => {
  try {
    const PurchaseDetailsid = req.params.id;
    const PurchaseDetailslist = await PurchaseDetailsData.DeletePurchaseDetails(PurchaseDetailsid);
    res.send(PurchaseDetailslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllPurchaseDetails: GetAllPurchaseDetails,
  GetOnePurchaseDetails: GetOnePurchaseDetails,
  InsertPurchaseDetails: InsertPurchaseDetails,
  UpdatePurchaseDetails: UpdatePurchaseDetails,
  DeletePurchaseDetails: DeletePurchaseDetails,
};
