const SalesDetailsData = require("../../Toms_Techveel_Data/Transactions/SalesDetails");

const GetAllSalesDetails = async (req, res, next) => {
  try {
    const SalesDetailslist = await SalesDetailsData.GetAllSalesDetails();
    res.send(SalesDetailslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOneSalesDetails = async (req, res, next) => {
  try {
    const SalesDetailsid = req.params.id;
    const SalesDetailsOne = await SalesDetailsData.GetOneSalesDetails(SalesDetailsid);
    res.send(SalesDetailsOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertSalesDetails = async (req, res, next) => {
  try {
    const SalesDetails = req.body;
    const SalesDetailslist = await SalesDetailsData.InsertSalesDetails(SalesDetails);
    res.send(SalesDetailslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateSalesDetails = async (req, res, next) => {
  try {
    const SalesDetailsid = req.params.id;
    const SalesDetails = req.body;
    const SalesDetailslist = await SalesDetailsData.UpdateSalesDetails(SalesDetailsid, SalesDetails);
    res.send(SalesDetailslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteSalesDetails = async (req, res, next) => {
  try {
    const SalesDetailsid = req.params.id;
    const SalesDetailslist = await SalesDetailsData.DeleteSalesDetails(SalesDetailsid);
    res.send(SalesDetailslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllSalesDetails: GetAllSalesDetails,
  GetOneSalesDetails: GetOneSalesDetails,
  InsertSalesDetails: InsertSalesDetails,
  UpdateSalesDetails: UpdateSalesDetails,
  DeleteSalesDetails: DeleteSalesDetails,
};
