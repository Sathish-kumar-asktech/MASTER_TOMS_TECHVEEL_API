const BankData = require("../../Toms_Techveel_Data/Masters/Bank");

const GetAllBank = async (req, res, next) => {
  try {
    const Banklist = await BankData.GetAllBank();
    res.send(Banklist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOneBank = async (req, res, next) => {
  try {
    const Bankid = req.params.id;
    const BankOne = await BankData.GetOneBank(Bankid);
    res.send(BankOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertBank = async (req, res, next) => {
  try {
    const Bank = req.body;
    const Banklist = await BankData.InsertBank(Bank);
    res.send(Banklist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateBank = async (req, res, next) => {
  try {
    const Bankid = req.params.id;
    const Bank = req.body;
    const Banklist = await BankData.UpdateBank(Bankid, Bank);
    res.send(Banklist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteBank = async (req, res, next) => {
  try {
    const Bankid = req.params.id;

    const Banklist = await BankData.DeleteBank(Bankid);
    res.send(Banklist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllBank: GetAllBank,
  GetOneBank: GetOneBank,
  InsertBank: InsertBank,
  UpdateBank: UpdateBank,
  DeleteBank: DeleteBank,
};
