const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertProductCategory = async (ProductCategoryData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/ProductCategory");
    const insertEvent = await pool
      .request()
      .input("ProductCategoryName", sql.VarChar(100), ProductCategoryData.ProductCategory)      
      .input("ActiveStatus", sql.Char(1), ProductCategoryData.ActiveStatus)
      .input("CreatedBy", sql.BigInt, ProductCategoryData.CreatedBy)
      .query(sqlQueries.InsertProductCategory);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllProductCategory = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/ProductCategory");
    const GetProductCategory = await pool.request().query(sqlQueries.GetAllProductCategory);
    return GetProductCategory.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneProductCategory = async (ProductCategoryid) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/ProductCategory");
    const GetoneProductCategory = await pool
      .request()
      .input("ProductCategoryid", sql.BigInt, ProductCategoryid)
      .query(sqlQueries.GetOneProductCategory);
    return GetoneProductCategory.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateProductCategory = async (ProductCategoryid, ProductCategoryData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/ProductCategory");
    const UpdateEvent = await pool
      .request()
      .input("ProductCategoryid", sql.BigInt, ProductCategoryid)
      .input("ProductCategoryName", sql.VarChar(100), ProductCategoryData.ProductCategory)      
      .input("ActiveStatus", sql.Char(1), ProductCategoryData.ActiveStatus)
      .input("ModifyBy", sql.BigInt, ProductCategoryData.ModifyBy)
      .query(sqlQueries.UpdateProductCategory);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteProductCategory = async (ProductCategoryid) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/ProductCategory");
    const deleteEvent = await pool
      .request()
      .input("ProductCategoryid", sql.BigInt, ProductCategoryid)
      .query(sqlQueries.DeleteProductCategory);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllProductCategory: GetAllProductCategory,
  GetOneProductCategory: GetOneProductCategory,
  InsertProductCategory: InsertProductCategory,
  UpdateProductCategory: UpdateProductCategory,
  DeleteProductCategory: DeleteProductCategory,
};
