const ProductCategoryData = require("../../Toms_Techveel_Data/Masters/ProductCategory");

const GetAllProductCategory = async (req, res, next) => {
  try {
    const ProductCategorylist = await ProductCategoryData.GetAllProductCategory();
    res.send(ProductCategorylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOneProductCategory = async (req, res, next) => {
  try {
    const ProductCategoryid = req.params.id;
    const ProductCategoryOne = await ProductCategoryData.GetOneProductCategory(ProductCategoryid);
    res.send(ProductCategoryOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertProductCategory = async (req, res, next) => {
  try {
    const ProductCategory = req.body;
    const ProductCategorylist = await ProductCategoryData.InsertProductCategory(ProductCategory);
    res.send(ProductCategorylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateProductCategory = async (req, res, next) => {
  try {
    const ProductCategoryid = req.params.id;
    const ProductCategory = req.body;
    const ProductCategorylist = await ProductCategoryData.UpdateProductCategory(ProductCategoryid, ProductCategory);
    res.send(ProductCategorylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteProductCategory = async (req, res, next) => {
  try {
    const ProductCategoryid = req.params.id;
    const ProductCategorylist = await ProductCategoryData.DeleteProductCategory(ProductCategoryid);
    res.send(ProductCategorylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllProductCategory: GetAllProductCategory,
  GetOneProductCategory: GetOneProductCategory,
  InsertProductCategory: InsertProductCategory,
  UpdateProductCategory: UpdateProductCategory,
  DeleteProductCategory: DeleteProductCategory,
};
