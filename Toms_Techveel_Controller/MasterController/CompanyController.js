const CompanyData = require("../../Toms_Techveel_Data/Masters/Company");

const GetAllCompany = async (req, res, next) => {
  try {
    const Companylist = await CompanyData.GetAllCompany();
    res.send(Companylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOneCompany = async (req, res, next) => {
  try {
    const Companyid = req.params.id;
    const CompanyOne = await CompanyData.GetOneCompany(Companyid);
    res.send(CompanyOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertCompany = async (req, res, next) => {
  try {
    const Company = req.body;
    // console.log(Company)
    const Companylist = await CompanyData.InsertCompany(Company);
    res.send(Companylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateCompany = async (req, res, next) => {
  try {
    const Companyid = req.params.id;
    const Company = req.body;
    const Companylist = await CompanyData.UpdateCompany(Companyid, Company);
    res.send(Companylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteCompany = async (req, res, next) => {
  try {
    const Companyid = req.params.id;
    const Companylist = await CompanyData.DeleteCompany(Companyid);
    res.send(Companylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllCompany: GetAllCompany,
  GetOneCompany: GetOneCompany,
  InsertCompany: InsertCompany,
  UpdateCompany: UpdateCompany,
  DeleteCompany: DeleteCompany,
};
