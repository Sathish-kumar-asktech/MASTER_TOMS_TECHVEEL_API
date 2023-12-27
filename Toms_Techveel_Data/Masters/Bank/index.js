const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertBank = async (Bankdata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Bank");
    const insertEvent = await pool
      .request()
      .input("Bankname", sql.VarChar(100), Bankdata.Bankname)      
      .input("AccNum", sql.VarChar(50), Bankdata.AccNum) 
      .input("IFSCCode", sql.VarChar(50), Bankdata.IFSCCode)      
      .input("Branch", sql.VarChar(100), Bankdata.Branch)
      .input("ActiveStatus", sql.Char(1), Bankdata.ActiveStatus)
      .input("CreatedBy", sql.BigInt, Bankdata.CreatedBy)
      .query(sqlQueries.InsertBank);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllBank = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Bank");
    const GetBank = await pool.request().query(sqlQueries.GetAllBank);
    return GetBank.recordset;
  } catch (error) {
    return error.message;
  }
};


const GetAllActiveBank = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Bank");
    const GetBank = await pool.request().query(sqlQueries.GetAllActiveBank);
    return GetBank.recordset;
  } catch (error) {
    return error.message;
  }
};


const GetOneBank = async (Bankid) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Bank");
    const GetoneBank = await pool
      .request()
      .input("Bankid", sql.BigInt, Bankid)
      .query(sqlQueries.GetOneBank);
    return GetoneBank.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateBank = async (Bankid, Bankdata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Bank");
    const UpdateEvent = await pool
      .request()
      .input("Bankid", sql.BigInt, Bankid)
      .input("Bankname", sql.VarChar(100), Bankdata.Bankname)      
      .input("AccNum", sql.VarChar(50), Bankdata.AccNum) 
      .input("IFSCCode", sql.VarChar(50), Bankdata.IFSCCode)      
      .input("Branch", sql.VarChar(100), Bankdata.Branch)
      .input("ActiveStatus", sql.Char(1), Bankdata.ActiveStatus)      
      .input("ModifyBy", sql.BigInt, Bankdata.ModifyBy)
      .query(sqlQueries.UpdateBank);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteBank = async (Bankid) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Bank");
    const deleteEvent = await pool
      .request()
      .input("Bankid", sql.BigInt, Bankid)
      .query(sqlQueries.DeleteBank);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllBank: GetAllBank,
  GetOneBank: GetOneBank,
  InsertBank: InsertBank,
  UpdateBank: UpdateBank,
  DeleteBank: DeleteBank,
  GetAllActiveBank:GetAllActiveBank
};
