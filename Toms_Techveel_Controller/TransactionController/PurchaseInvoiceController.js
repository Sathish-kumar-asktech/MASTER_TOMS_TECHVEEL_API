const PurchaseInvoiceData = require("../../Toms_Techveel_Data/Transactions/PurchaseInvoice");

const GetAllPurchaseInvoice = async (req, res, next) => {
  try {
    const PurchaseInvoicelist = await PurchaseInvoiceData.GetAllPurchaseInvoice();
    res.send(PurchaseInvoicelist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOnePurchaseInvoice = async (req, res, next) => {
  try {
    const PurchaseInvoiceid = req.params.id;
    const PurchaseInvoiceOne = await PurchaseInvoiceData.GetOnePurchaseInvoice(PurchaseInvoiceid);
    res.send(PurchaseInvoiceOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertPurchaseInvoice = async (req, res, next) => {
  try {
    const PurchaseInvoice = req.body;
    const PurchaseInvoicelist = await PurchaseInvoiceData.InsertPurchaseInvoice(PurchaseInvoice);
    res.send(PurchaseInvoicelist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdatePurchaseInvoice = async (req, res, next) => {
  try {
    const PurchaseInvoiceid = req.params.id;
    const PurchaseInvoice = req.body;
    const PurchaseInvoicelist = await PurchaseInvoiceData.UpdatePurchaseInvoice(PurchaseInvoiceid, PurchaseInvoice);
    res.send(PurchaseInvoicelist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeletePurchaseInvoice = async (req, res, next) => {
  try {
    const PurchaseInvoiceid = req.params.id;
    const PurchaseInvoicelist = await PurchaseInvoiceData.DeletePurchaseInvoice(PurchaseInvoiceid);
    res.send(PurchaseInvoicelist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllPurchaseInvoice: GetAllPurchaseInvoice,
  GetOnePurchaseInvoice: GetOnePurchaseInvoice,
  InsertPurchaseInvoice: InsertPurchaseInvoice,
  UpdatePurchaseInvoice: UpdatePurchaseInvoice,
  DeletePurchaseInvoice: DeletePurchaseInvoice,
};
