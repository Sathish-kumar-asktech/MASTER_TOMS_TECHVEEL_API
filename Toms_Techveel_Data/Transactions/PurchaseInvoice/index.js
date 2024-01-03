const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertPurchaseInvoice = async (PurchaseInvoiceData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries(
      "Transactions/PurchaseInvoice"
    );
    const insertEvent = await pool
      .request()
      // .input("InvoiceNumber", sql.BigInt, PurchaseInvoiceData.InvoiceNumber)
      .input("InvoiceDate", sql.SmallDateTime, PurchaseInvoiceData.InvoiceDate)
      .input("PINumber", sql.BigInt, PurchaseInvoiceData.PINumber)
      .input("PIDate", sql.SmallDateTime, PurchaseInvoiceData.PIDate)
      .input("Supplierid", sql.BigInt, PurchaseInvoiceData.Supplierid)
      .input("TotalAmount", sql.BigInt, PurchaseInvoiceData.TotalAmount)
      .input("Discount", sql.BigInt, PurchaseInvoiceData.Discount)
      .input("netAmount", sql.BigInt, PurchaseInvoiceData.netAmount)
      .input("Remarks", sql.VarChar(2000), PurchaseInvoiceData.Remarks)
      .input("CreatedBy", sql.BigInt, PurchaseInvoiceData.CreatedBy)
      .query(sqlQueries.InsertPurchaseInvoice);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllPurchaseInvoice = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries(
      "Transactions/PurchaseInvoice"
    );
    const GetPurchaseInvoice = await pool
      .request()
      .query(sqlQueries.GetAllPurchaseInvoice);
    return GetPurchaseInvoice.recordset;
  } catch (error) {
    return error.message;
  }
};



const GetAllPurchaseInvoiceMIS = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries(
      "Transactions/PurchaseInvoice"
    );
    const GetAllPurchaseInvoiceMIS = await pool
      .request()
      .query(sqlQueries.GetAllPurchaseInvoiceMIS);
    return GetAllPurchaseInvoiceMIS.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOnePurchaseInvoice = async (PurchaseInvoiceID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries(
      "Transactions/PurchaseInvoice"
    );
    const GetonePurchaseInvoice = await pool
      .request()
      .input("PurchaseInvoiceID", sql.BigInt, PurchaseInvoiceID)
      .query(sqlQueries.GetOnePurchaseInvoice);
    return GetonePurchaseInvoice.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdatePurchaseInvoice = async (
  PurchaseInvoiceID,
  PurchaseInvoiceData
) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries(
      "Transactions/PurchaseInvoice"
    );
    const UpdateEvent = await pool
      .request()
      .input("PurchaseInvoiceID", sql.BigInt, PurchaseInvoiceID)
      // .input("InvoiceNumber", sql.BigInt, PurchaseInvoiceData.InvoiceNumber)
      .input("InvoiceDate", sql.SmallDateTime, PurchaseInvoiceData.InvoiceDate)
      .input("PINumber", sql.BigInt, PurchaseInvoiceData.PINumber)
      .input("PIDate", sql.SmallDateTime, PurchaseInvoiceData.PIDate)
      .input("Supplierid", sql.BigInt, PurchaseInvoiceData.Supplierid)
      .input("TotalAmount", sql.BigInt, PurchaseInvoiceData.TotalAmount)
      .input("Discount", sql.BigInt, PurchaseInvoiceData.Discount)
      .input("netAmount", sql.BigInt, PurchaseInvoiceData.netAmount)
      .input("Remarks", sql.VarChar(2000), PurchaseInvoiceData.Remarks)
      .input("ModifyBy", sql.BigInt, PurchaseInvoiceData.ModifyBy)
      .query(sqlQueries.UpdatePurchaseInvoice);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeletePurchaseInvoice = async (PurchaseInvoiceID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries(
      "Transactions/PurchaseInvoice"
    );
    const deleteEvent = await pool
      .request()
      .input("PurchaseInvoiceID", sql.BigInt, PurchaseInvoiceID)
      .query(sqlQueries.DeletePurchaseInvoice);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllPurchaseInvoice: GetAllPurchaseInvoice,
  GetAllPurchaseInvoiceMIS: GetAllPurchaseInvoiceMIS,
  GetOnePurchaseInvoice: GetOnePurchaseInvoice,
  InsertPurchaseInvoice: InsertPurchaseInvoice,
  UpdatePurchaseInvoice: UpdatePurchaseInvoice,
  DeletePurchaseInvoice: DeletePurchaseInvoice,
};
