const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertSupplier = async (SupplierData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Supplier");
    const insertEvent = await pool
      .request()      
      .input("SupplierName", sql.VarChar(100), SupplierData.SupplierName)    
      .input("Address", sql.VarChar(200), SupplierData.Address)    
      .input("PinCode", sql.VarChar(10), SupplierData.PinCode)          
      .input("City", sql.VarChar(75),  SupplierData.City)          
      .input("State", sql.VarChar(75), SupplierData.State)       
      .input("Country", sql.VarChar(75), SupplierData.Country) 
      .input("PhoneNo", sql.VarChar(20), SupplierData.PhoneNo)    
      .input("EmailId", sql.VarChar(50), SupplierData.EmailId)            
      .input("ActiveStatus", sql.Char(1), SupplierData.ActiveStatus)
      .input("CreatedBy", sql.BigInt, SupplierData.CreatedBy)
      .query(sqlQueries.InsertSupplier);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllSupplier = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Supplier");
    const GetSupplier = await pool.request().query(sqlQueries.GetAllSupplier);
    return GetSupplier.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneSupplier = async (Supplierid) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Supplier");
    const GetoneSupplier = await pool
      .request()
      .input("Supplierid", sql.BigInt, Supplierid)
      .query(sqlQueries.GetOneSupplier);
    return GetoneSupplier.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateSupplier = async (Supplierid, SupplierData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Supplier");
    const UpdateEvent = await pool
      .request()
      .input("Supplierid", sql.BigInt, Supplierid)        
      .input("SupplierName", sql.VarChar(100), SupplierData.SupplierName)    
      .input("Address", sql.VarChar(200), SupplierData.Address)    
      .input("PinCode", sql.VarChar(10), SupplierData.PinCode)          
      .input("City", sql.VarChar(75),  SupplierData.City)          
      .input("State", sql.VarChar(75), SupplierData.State)       
      .input("Country", sql.VarChar(75), SupplierData.Country) 
      .input("PhoneNo", sql.VarChar(20), SupplierData.PhoneNo)    
      .input("EmailId", sql.VarChar(50), SupplierData.EmailId)              
      .input("ActiveStatus", sql.Char(1), SupplierData.ActiveStatus)
      .input("ModifyBy", sql.BigInt, SupplierData.ModifyBy)
      .query(sqlQueries.UpdateSupplier);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteSupplier = async (Supplierid) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Supplier");
    const deleteEvent = await pool
      .request()
      .input("Supplierid", sql.BigInt, Supplierid)
      .query(sqlQueries.DeleteSupplier);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllSupplier: GetAllSupplier,
  GetOneSupplier: GetOneSupplier,
  InsertSupplier: InsertSupplier,
  UpdateSupplier: UpdateSupplier,
  DeleteSupplier: DeleteSupplier,
};
