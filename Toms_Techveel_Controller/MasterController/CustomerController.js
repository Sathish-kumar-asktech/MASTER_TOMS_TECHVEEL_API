const CustomerData = require("../../Toms_Techveel_Data/Masters/Customer");

const GetAllCustomer = async (req, res, next) => {
  try {
    const Customerlist = await CustomerData.GetAllCustomer();
    res.send(Customerlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOneCustomer = async (req, res, next) => {
  try {
    const Customerid = req.params.id;
    const CustomerOne = await CustomerData.GetOneCustomer(Customerid);
    res.send(CustomerOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertCustomer = async (req, res, next) => {
  try {
    const Customer = req.body;
    // console.log(Customer)
    const Customerlist = await CustomerData.InsertCustomer(Customer);
    res.send(Customerlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateCustomer = async (req, res, next) => {
  try {
    const Customerid = req.params.id;
    const Customer = req.body;
    const Customerlist = await CustomerData.UpdateCustomer(Customerid, Customer);
    res.send(Customerlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteCustomer = async (req, res, next) => {
  try {
    const Customerid = req.params.id;
    const Customerlist = await CustomerData.DeleteCustomer(Customerid);
    res.send(Customerlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllCustomer: GetAllCustomer,
  GetOneCustomer: GetOneCustomer,
  InsertCustomer: InsertCustomer,
  UpdateCustomer: UpdateCustomer,
  DeleteCustomer: DeleteCustomer,
};
