const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertSalesInvoice = async (SalesInvoiceData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/SalesInvoice");
    const insertEvent = await pool
      .request()            
      .input("InvoiceDate", sql.SmallDateTime, SalesInvoiceData.InvoiceDate) 
      .input("PoRefNumber", sql.BigInt, SalesInvoiceData.PoRefNumber)
      .input("PoRefDate", sql.SmallDateTime, SalesInvoiceData.PoRefDate)
      .input("Customerid", sql.BigInt, SalesInvoiceData.Customerid) 
      .input("TotalAmount", sql.BigInt, SalesInvoiceData.TotalAmount) 
      .input("Discount", sql.BigInt, SalesInvoiceData.Discount) 
      .input("netAmount", sql.BigInt, SalesInvoiceData.netAmount)  
      .input("Remarks", sql.VarChar(2000), SalesInvoiceData.Remarks)
      .input("CreatedBy", sql.BigInt, SalesInvoiceData.CreatedBy)
      .query(sqlQueries.InsertSalesInvoice);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllSalesInvoice = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/SalesInvoice");
    const GetSalesInvoice = await pool.request().query(sqlQueries.GetAllSalesInvoice);
    return GetSalesInvoice.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllSalesInvoiceMIS = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/SalesInvoice");
    const GetSalesInvoice = await pool.request().query(sqlQueries.GetAllSalesInvoiceMIS);
    return GetSalesInvoice.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneSalesInvoice = async (SalesInvoiceID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/SalesInvoice");
    const GetoneSalesInvoice = await pool
      .request()
      .input("SalesInvoiceID", sql.BigInt, SalesInvoiceID)
      .query(sqlQueries.GetOneSalesInvoice);
    return GetoneSalesInvoice.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateSalesInvoice = async (SalesInvoiceID, SalesInvoiceData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/SalesInvoice");
    const UpdateEvent = await pool
      .request()
      .input("SalesInvoiceID", sql.BigInt, SalesInvoiceID)  
      // .input("InvoiceNumber", sql.BigInt, SalesInvoiceData.InvoiceNumber)
      .input("InvoiceDate", sql.SmallDateTime, SalesInvoiceData.InvoiceDate) 
      .input("PoRefNumber", sql.BigInt, SalesInvoiceData.PoRefNumber)
      .input("PoRefDate", sql.SmallDateTime, SalesInvoiceData.PoRefDate)
      .input("Customerid", sql.BigInt, SalesInvoiceData.Customerid) 
      .input("TotalAmount", sql.BigInt, SalesInvoiceData.TotalAmount) 
      .input("Discount", sql.BigInt, SalesInvoiceData.Discount) 
      .input("netAmount", sql.BigInt, SalesInvoiceData.netAmount)  
      .input("Remarks", sql.VarChar(2000), SalesInvoiceData.Remarks)
      .input("ModifyBy", sql.BigInt, SalesInvoiceData.ModifyBy)
      .query(sqlQueries.UpdateSalesInvoice);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteSalesInvoice = async (SalesInvoiceID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transactions/SalesInvoice");
    const deleteEvent = await pool
      .request()
      .input("SalesInvoiceID", sql.BigInt, SalesInvoiceID)
      .query(sqlQueries.DeleteSalesInvoice);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllSalesInvoice: GetAllSalesInvoice,
  GetAllSalesInvoiceMIS:GetAllSalesInvoiceMIS,
  GetOneSalesInvoice: GetOneSalesInvoice,
  InsertSalesInvoice: InsertSalesInvoice,
  UpdateSalesInvoice: UpdateSalesInvoice,
  DeleteSalesInvoice: DeleteSalesInvoice,
};
