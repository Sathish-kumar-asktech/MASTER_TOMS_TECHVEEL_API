const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const GetAllMISStockReport = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries(
      "MIS/MISStockReport"
    );
    const MISStockReport = await pool
      .request()
      .query(sqlQueries.GetAllMISStockReport);
    return MISStockReport.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllMISStockReport: GetAllMISStockReport,
};
