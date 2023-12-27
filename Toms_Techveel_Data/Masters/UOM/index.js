const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertUOM = async (UomData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/UOM");
    const insertEvent = await pool
      .request()
      .input("UOM", sql.VarChar(20), UomData.UOM)      
      .input("ActiveStatus", sql.Char(1), UomData.ActiveStatus)
      .input("CreatedBy", sql.BigInt, UomData.CreatedBy)
      .query(sqlQueries.InsertUOM);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllUOM = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/UOM");
    const GetUOM = await pool.request().query(sqlQueries.GetAllUOM);
    return GetUOM.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneUOM = async (UomID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/UOM");
    const GetoneUOM = await pool
      .request()
      .input("UomID", sql.BigInt, UomID)
      .query(sqlQueries.GetOneUOM);
    return GetoneUOM.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateUOM = async (UomID, UomData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/UOM");
    const UpdateEvent = await pool
      .request()
      .input("UomID", sql.BigInt, UomID)
      .input("UOM", sql.VarChar(20), UomData.UOM)      
      .input("ActiveStatus", sql.Char(1), UomData.ActiveStatus)
      .input("ModifyBy", sql.BigInt, UomData.ModifyBy)
      .query(sqlQueries.UpdateUOM);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteUOM = async (UomID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/UOM");
    const deleteEvent = await pool
      .request()
      .input("UomID", sql.BigInt, UomID)
      .query(sqlQueries.DeleteUOM);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllUOM: GetAllUOM,
  GetOneUOM: GetOneUOM,
  InsertUOM: InsertUOM,
  UpdateUOM: UpdateUOM,
  DeleteUOM: DeleteUOM,
};
