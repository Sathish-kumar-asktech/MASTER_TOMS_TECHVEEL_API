const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertCustomer = async (CustomerData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Customer");
    const insertEvent = await pool
      .request()      
      .input("CustomerName", sql.VarChar(100), CustomerData.CustomerName)    
      .input("Address", sql.VarChar(200), CustomerData.Address)    
      .input("PinCode", sql.VarChar(10), CustomerData.PinCode)          
      .input("City", sql.VarChar(75),  CustomerData.City)          
      .input("State", sql.VarChar(75), CustomerData.State)       
      .input("Country", sql.VarChar(75), CustomerData.Country) 
      .input("PhoneNo", sql.VarChar(20), CustomerData.PhoneNo)    
      .input("EmailId", sql.VarChar(50), CustomerData.EmailId)            
      .input("ActiveStatus", sql.Char(1), CustomerData.ActiveStatus)
      .input("CreatedBy", sql.BigInt, CustomerData.CreatedBy)
      .query(sqlQueries.InsertCustomer);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllCustomer = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Customer");
    const GetCustomer = await pool.request().query(sqlQueries.GetAllCustomer);
    return GetCustomer.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneCustomer = async (Customerid) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Customer");
    const GetoneCustomer = await pool
      .request()
      .input("Customerid", sql.BigInt, Customerid)
      .query(sqlQueries.GetOneCustomer);
    return GetoneCustomer.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateCustomer = async (Customerid, CustomerData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Customer");
    const UpdateEvent = await pool
      .request()
      .input("Customerid", sql.BigInt, Customerid)        
      .input("CustomerName", sql.VarChar(100), CustomerData.CustomerName)    
      .input("Address", sql.VarChar(200), CustomerData.Address)    
      .input("PinCode", sql.VarChar(10), CustomerData.PinCode)          
      .input("City", sql.VarChar(75),  CustomerData.City)          
      .input("State", sql.VarChar(75), CustomerData.State)       
      .input("Country", sql.VarChar(75), CustomerData.Country) 
      .input("PhoneNo", sql.VarChar(20), CustomerData.PhoneNo)    
      .input("EmailId", sql.VarChar(50), CustomerData.EmailId)            
      .input("ActiveStatus", sql.Char(1), CustomerData.ActiveStatus)
      .input("ModifyBy", sql.BigInt, CustomerData.ModifyBy)
      .query(sqlQueries.UpdateCustomer);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteCustomer = async (Customerid) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Customer");
    const deleteEvent = await pool
      .request()
      .input("Customerid", sql.BigInt, Customerid)
      .query(sqlQueries.DeleteCustomer);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllCustomer: GetAllCustomer,
  GetOneCustomer: GetOneCustomer,
  InsertCustomer: InsertCustomer,
  UpdateCustomer: UpdateCustomer,
  DeleteCustomer: DeleteCustomer,
};
