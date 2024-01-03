const StcockReportData = require("../../Toms_Techveel_Data/MIS/MISStockReport");

const GetAllMISStockReport = async (req, res, next) => {
  try {
    const SalesDetailslist = await StcockReportData.GetAllMISStockReport();
    res.send(SalesDetailslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllMISStockReport: GetAllMISStockReport,
};
