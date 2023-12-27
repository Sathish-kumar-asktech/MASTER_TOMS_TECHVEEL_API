const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertProductDescription = async (ProductDescriptionData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/ProductDescription");
    const insertEvent = await pool
      .request()      
      .input("ProductDescription", sql.VarChar(20), ProductDescriptionData.ProductDescription)    
      .input("ProductCategoryid", sql.BigInt, ProductDescriptionData.ProductCategory)   
      .input("Rate", sql.Numeric(18,2), ProductDescriptionData.Rate)  
      .input("UomID", sql.BigInt, ProductDescriptionData.UomID)       
      .input("ActiveStatus", sql.Char(1), ProductDescriptionData.ActiveStatus)
      .input("CreatedBy", sql.BigInt, ProductDescriptionData.CreatedBy)
      .query(sqlQueries.InsertProductDescription);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllProductDescription = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/ProductDescription");
    const GetProductDescription = await pool.request().query(sqlQueries.GetAllProductDescription);
    return GetProductDescription.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneProductDescription = async (ProductDetailId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/ProductDescription");
    const GetoneProductDescription = await pool
      .request()
      .input("ProductDetailId", sql.BigInt, ProductDetailId)
      .query(sqlQueries.GetOneProductDescription);
    return GetoneProductDescription.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateProductDescription = async (ProductDetailId, ProductDescriptionData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/ProductDescription");
    const UpdateEvent = await pool
      .request()
      .input("ProductDetailId", sql.BigInt, ProductDetailId)  
      .input("ProductDescription", sql.VarChar(20), ProductDescriptionData.ProductDescription)    
      .input("ProductCategoryid", sql.BigInt, ProductDescriptionData.ProductCategory)   
      .input("Rate", sql.Numeric(18,2), ProductDescriptionData.Rate)  
      .input("UomID", sql.BigInt, ProductDescriptionData.UomID)            
      .input("ActiveStatus", sql.Char(1), ProductDescriptionData.ActiveStatus)
      .input("ModifyBy", sql.BigInt, ProductDescriptionData.ModifyBy)
      .query(sqlQueries.UpdateProductDescription);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteProductDescription = async (ProductDetailId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/ProductDescription");
    const deleteEvent = await pool
      .request()
      .input("ProductDetailId", sql.BigInt, ProductDetailId)
      .query(sqlQueries.DeleteProductDescription);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllProductDescription: GetAllProductDescription,
  GetOneProductDescription: GetOneProductDescription,
  InsertProductDescription: InsertProductDescription,
  UpdateProductDescription: UpdateProductDescription,
  DeleteProductDescription: DeleteProductDescription,
};
