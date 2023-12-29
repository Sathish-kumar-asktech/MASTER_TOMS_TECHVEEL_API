const SalesInvoiceData = require("../../Toms_Techveel_Data/Transactions/SalesInvoice");

const GetAllSalesInvoice = async (req, res, next) => {
  try {
    const SalesInvoicelist = await SalesInvoiceData.GetAllSalesInvoice();
    res.send(SalesInvoicelist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOneSalesInvoice = async (req, res, next) => {
  try {
    const SalesInvoiceid = req.params.id;
    const SalesInvoiceOne = await SalesInvoiceData.GetOneSalesInvoice(SalesInvoiceid);
    res.send(SalesInvoiceOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertSalesInvoice = async (req, res, next) => {
  try {
    const SalesInvoice = req.body;
    const SalesInvoicelist = await SalesInvoiceData.InsertSalesInvoice(SalesInvoice);
    res.send(SalesInvoicelist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateSalesInvoice = async (req, res, next) => {
  try {
    const SalesInvoiceid = req.params.id;
    const SalesInvoice = req.body;
    const SalesInvoicelist = await SalesInvoiceData.UpdateSalesInvoice(SalesInvoiceid, SalesInvoice);
    res.send(SalesInvoicelist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteSalesInvoice = async (req, res, next) => {
  try {
    const SalesInvoiceid = req.params.id;
    const SalesInvoicelist = await SalesInvoiceData.DeleteSalesInvoice(SalesInvoiceid);
    res.send(SalesInvoicelist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllSalesInvoice: GetAllSalesInvoice,
  GetOneSalesInvoice: GetOneSalesInvoice,
  InsertSalesInvoice: InsertSalesInvoice,
  UpdateSalesInvoice: UpdateSalesInvoice,
  DeleteSalesInvoice: DeleteSalesInvoice,
};
