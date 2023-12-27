const SupplierData = require("../../Toms_Techveel_Data/Masters/Supplier");

const GetAllSupplier = async (req, res, next) => {
  try {
    const Supplierlist = await SupplierData.GetAllSupplier();
    res.send(Supplierlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOneSupplier = async (req, res, next) => {
  try {
    const Supplierid = req.params.id;
    const SupplierOne = await SupplierData.GetOneSupplier(Supplierid);
    res.send(SupplierOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertSupplier = async (req, res, next) => {
  try {
    const Supplier = req.body;
    const Supplierlist = await SupplierData.InsertSupplier(Supplier);
    res.send(Supplierlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateSupplier = async (req, res, next) => {
  try {
    const Supplierid = req.params.id;
    const Supplier = req.body;
    const Supplierlist = await SupplierData.UpdateSupplier(Supplierid, Supplier);
    res.send(Supplierlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteSupplier = async (req, res, next) => {
  try {
    const Supplierid = req.params.id;
    const Supplierlist = await SupplierData.DeleteSupplier(Supplierid);
    res.send(Supplierlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllSupplier: GetAllSupplier,
  GetOneSupplier: GetOneSupplier,
  InsertSupplier: InsertSupplier,
  UpdateSupplier: UpdateSupplier,
  DeleteSupplier: DeleteSupplier,
};
