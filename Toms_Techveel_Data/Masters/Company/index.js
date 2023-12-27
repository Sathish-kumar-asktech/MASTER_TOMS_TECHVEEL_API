const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertCompany = async (CompanyData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Company");
    const insertEvent = await pool
      .request()
      .input("CompanyName", sql.VarChar(100), CompanyData.CompanyName)
      .input("Address", sql.VarChar(200), CompanyData.Address)
      .input("PinCode", sql.VarChar(10), CompanyData.PinCode)
      .input("City", sql.VarChar(75),  CompanyData.City)          
      .input("State", sql.VarChar(75), CompanyData.State)       
      .input("Country", sql.VarChar(75), CompanyData.Country) 
      .input("PhoneNo", sql.VarChar(20), CompanyData.PhoneNo)
      .input("EmailId", sql.VarChar(50), CompanyData.EmailId)
      .input("Bankid", sql.BigInt, CompanyData.Bankid)
      .input("ActiveStatus", sql.Char(1), CompanyData.ActiveStatus)
      .input("CreatedBy", sql.BigInt, CompanyData.CreatedBy)
      .query(sqlQueries.InsertCompany);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllCompany = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Company");
    const GetCompany = await pool.request().query(sqlQueries.GetAllCompany);
    return GetCompany.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneCompany = async (CompanyId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Company");
    const GetoneCompany = await pool
      .request()
      .input("CompanyId", sql.BigInt, CompanyId)
      .query(sqlQueries.GetOneCompany);
    return GetoneCompany.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateCompany = async (CompanyId, CompanyData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Company");
    const UpdateEvent = await pool
      .request()
      .input("CompanyId", sql.BigInt, CompanyId)
      .input("CompanyName", sql.VarChar(100), CompanyData.CompanyName)
      .input("Address", sql.VarChar(200), CompanyData.Address)
      .input("PinCode", sql.VarChar(10), CompanyData.PinCode)
      .input("City", sql.VarChar(75),  CompanyData.City)          
      .input("State", sql.VarChar(75), CompanyData.State)       
      .input("Country", sql.VarChar(75), CompanyData.Country) 
      .input("PhoneNo", sql.VarChar(20), CompanyData.PhoneNo)
      .input("EmailId", sql.VarChar(50), CompanyData.EmailId)
      .input("Bankid", sql.BigInt, CompanyData.Bankid)
      .input("ActiveStatus", sql.Char(1), CompanyData.ActiveStatus)
      .input("ModifyBy", sql.BigInt, CompanyData.ModifyBy)
      .query(sqlQueries.UpdateCompany);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteCompany = async (CompanyId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Company");
    const deleteEvent = await pool
      .request()
      .input("CompanyId", sql.BigInt, CompanyId)
      .query(sqlQueries.DeleteCompany);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllCompany: GetAllCompany,
  GetOneCompany: GetOneCompany,
  InsertCompany: InsertCompany,
  UpdateCompany: UpdateCompany,
  DeleteCompany: DeleteCompany,
};
