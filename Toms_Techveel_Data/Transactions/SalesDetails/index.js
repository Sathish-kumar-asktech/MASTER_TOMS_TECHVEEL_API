const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertSalesDetails = async (SalesDetailsData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/SalesDetails");
    const insertEvent = await pool
      .request()    
      .input("ProductDetailId", sql.BigInt, SalesDetailsData.ProductDetailId)   
      .input("SalesInvoiceID", sql.BigInt, SalesDetailsData.SalesInvoiceID)   
      .input("Quantity", sql.BigInt, SalesDetailsData.Quantity)   
      .input("Rate", sql.BigInt, SalesDetailsData.Rate)   
      .input("Discount", sql.BigInt, SalesDetailsData.Discount)   
      .input("netAmount", sql.BigInt, SalesDetailsData.netAmount)   
      .input("CreatedBy", sql.BigInt, SalesDetailsData.CreatedBy)
      .query(sqlQueries.InsertSalesDetails);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllSalesDetails = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/SalesDetails");
    const GetSalesDetails = await pool.request().query(sqlQueries.GetAllSalesDetails);
    return GetSalesDetails.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneSalesDetails = async (SalesInvoiceID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/SalesDetails");
    const GetoneSalesDetails = await pool
      .request()
      .input("SalesInvoiceID", sql.BigInt, SalesInvoiceID)
      .query(sqlQueries.GetOneSalesDetails);
    return GetoneSalesDetails.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateSalesDetails = async (SalesDetailsID, SalesDetailsData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/SalesDetails");
    const UpdateEvent = await pool
      .request()
      .input("SalesDetailsID", sql.BigInt, SalesDetailsID)  
      .input("ProductDetailId", sql.BigInt, SalesDetailsData.ProductDetailId)   
      .input("SalesInvoiceID", sql.BigInt, SalesDetailsData.SalesInvoiceID)   
      .input("Quantity", sql.BigInt, SalesDetailsData.Quantity)   
      .input("Rate", sql.BigInt, SalesDetailsData.Rate)   
      .input("Discount", sql.BigInt, SalesDetailsData.Discount)   
      .input("netAmount", sql.BigInt, SalesDetailsData.netAmount)
      .input("ModifyBy", sql.BigInt, SalesDetailsData.ModifyBy)
      .query(sqlQueries.UpdateSalesDetails);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteSalesDetails = async (SalesInvoiceID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/SalesDetails");
    const deleteEvent = await pool
      .request()
      .input("SalesInvoiceID", sql.BigInt, SalesInvoiceID)
      .query(sqlQueries.DeleteSalesDetails);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllSalesDetails: GetAllSalesDetails,
  GetOneSalesDetails: GetOneSalesDetails,
  InsertSalesDetails: InsertSalesDetails,
  UpdateSalesDetails: UpdateSalesDetails,
  DeleteSalesDetails: DeleteSalesDetails,
};
