const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const GetAllCountry = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Location");
    const GetLocation = await pool.request().query(sqlQueries.GetAllCountry);
    return GetLocation.recordset;
  } catch (error) {
    return error.message;
  }
};


const GetAllStates = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Location");
    const GetLocation = await pool.request().query(sqlQueries.GetAllStates);
    return GetLocation.recordset;
  } catch (error) {
    return error.message;
  }
};



const GetAllCity = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Location");
    const GetLocation = await pool.request().query(sqlQueries.GetAllCities);
    return GetLocation.recordset;
  } catch (error) {
    return error.message;
  }
};



module.exports = {
  GetAllCountry: GetAllCountry,  
  GetAllStates: GetAllStates,
  GetAllCity: GetAllCity,
};
