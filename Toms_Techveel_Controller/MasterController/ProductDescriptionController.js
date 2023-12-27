const ProductDescriptionData = require("../../Toms_Techveel_Data/Masters/ProductDescription");

const GetAllProductDescription = async (req, res, next) => {
  try {
    const ProductDescriptionlist = await ProductDescriptionData.GetAllProductDescription();
    res.send(ProductDescriptionlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOneProductDescription = async (req, res, next) => {
  try {
    const ProductDescriptionid = req.params.id;
    const ProductDescriptionOne = await ProductDescriptionData.GetOneProductDescription(ProductDescriptionid);
    res.send(ProductDescriptionOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertProductDescription = async (req, res, next) => {
  try {
    const ProductDescription = req.body;
    const ProductDescriptionlist = await ProductDescriptionData.InsertProductDescription(ProductDescription);
    res.send(ProductDescriptionlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateProductDescription = async (req, res, next) => {
  try {
    const ProductDescriptionid = req.params.id;
    const ProductDescription = req.body;
    const ProductDescriptionlist = await ProductDescriptionData.UpdateProductDescription(ProductDescriptionid, ProductDescription);
    res.send(ProductDescriptionlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteProductDescription = async (req, res, next) => {
  try {
    const ProductDescriptionid = req.params.id;
    const ProductDescriptionlist = await ProductDescriptionData.DeleteProductDescription(ProductDescriptionid);
    res.send(ProductDescriptionlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllProductDescription: GetAllProductDescription,
  GetOneProductDescription: GetOneProductDescription,
  InsertProductDescription: InsertProductDescription,
  UpdateProductDescription: UpdateProductDescription,
  DeleteProductDescription: DeleteProductDescription,
};
