const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertPurchaseDetails = async (PurchaseDetailsData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/PurchaseDetails");
    const insertEvent = await pool
      .request()    
      .input("ProductDetailId", sql.BigInt, PurchaseDetailsData.ProductDetailId)   
      .input("PurchaseInvoiceID", sql.BigInt, PurchaseDetailsData.PurchaseInvoiceID)   
      .input("Quantity", sql.BigInt, PurchaseDetailsData.Quantity)   
      .input("Discount", sql.BigInt, PurchaseDetailsData.Discount)   
      .input("netAmount", sql.BigInt, PurchaseDetailsData.netAmount)   
      .input("CreatedBy", sql.BigInt, PurchaseDetailsData.CreatedBy)
      .query(sqlQueries.InsertPurchaseDetails);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllPurchaseDetails = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/PurchaseDetails");
    const GetPurchaseDetails = await pool.request().query(sqlQueries.GetAllPurchaseDetails);
    return GetPurchaseDetails.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOnePurchaseDetails = async (PurchaseDetailsID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/PurchaseDetails");
    const GetonePurchaseDetails = await pool
      .request()
      .input("PurchaseDetailsID", sql.BigInt, PurchaseDetailsID)
      .query(sqlQueries.GetOnePurchaseDetails);
    return GetonePurchaseDetails.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdatePurchaseDetails = async (PurchaseDetailsID, PurchaseDetailsData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/PurchaseDetails");
    const UpdateEvent = await pool
      .request()
      .input("PurchaseDetailsID", sql.BigInt, PurchaseDetailsID)  
      .input("ProductDetailId", sql.BigInt, PurchaseDetailsData.ProductDetailId)   
      .input("PurchaseInvoiceID", sql.BigInt, PurchaseDetailsData.PurchaseInvoiceID)   
      .input("Quantity", sql.BigInt, PurchaseDetailsData.Quantity)   
      .input("Discount", sql.BigInt, PurchaseDetailsData.Discount)   
      .input("netAmount", sql.BigInt, PurchaseDetailsData.netAmount)
      .input("ModifyBy", sql.BigInt, PurchaseDetailsData.ModifyBy)
      .query(sqlQueries.UpdatePurchaseDetails);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeletePurchaseDetails = async (PurchaseDetailsID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/PurchaseDetails");
    const deleteEvent = await pool
      .request()
      .input("PurchaseDetailsID", sql.BigInt, PurchaseDetailsID)
      .query(sqlQueries.DeletePurchaseDetails);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllPurchaseDetails: GetAllPurchaseDetails,
  GetOnePurchaseDetails: GetOnePurchaseDetails,
  InsertPurchaseDetails: InsertPurchaseDetails,
  UpdatePurchaseDetails: UpdatePurchaseDetails,
  DeletePurchaseDetails: DeletePurchaseDetails,
};
