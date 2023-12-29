const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const pdfcreater = require("html-pdf");
const fs = require("fs");
const config = require("./Config");

//  masters
const UsersRoute = require("./Toms_Techveel_Route/MasterRoute/UsersRoute");
const UOMRoute = require("./Toms_Techveel_Route/MasterRoute/UOMRoute");
const BankRoute = require("./Toms_Techveel_Route/MasterRoute/BankRoute");
const ProductCategoryRoute = require("./Toms_Techveel_Route/MasterRoute/ProductCategoryRoute");
const ProductDescriptionRoute = require("./Toms_Techveel_Route/MasterRoute/ProductDescriptionRoute");
const CustomerRoute = require("./Toms_Techveel_Route/MasterRoute/CustomerRoute");
const SupplierRoute = require("./Toms_Techveel_Route/MasterRoute/SupplierRoute");
const CompanyRoute = require("./Toms_Techveel_Route/MasterRoute/CompanyRoute");
const LocationRoute = require("./Toms_Techveel_Route/MasterRoute/LocationRoute");


//Transactions
const PurchaseDetailsRoute = require("./Toms_Techveel_Route/TransactionRoute/PurchaseDetailsRoute");
const PurchaseInvoiceRoute = require("./Toms_Techveel_Route/TransactionRoute/PurchaseInvoiceRoute");
const SalesDetailsRoute = require("./Toms_Techveel_Route/TransactionRoute/SalesDetailsRoute");
const SalesInvoiceRoute = require("./Toms_Techveel_Route/TransactionRoute/SalesInvoiceRoute");


const app = express();
app.use(cors());
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.static("Public"));

//  masters
app.use("/api", UsersRoute.Toms_Techveel_Route);
app.use("/api", UOMRoute.Toms_Techveel_Route);
app.use("/api", BankRoute.Toms_Techveel_Route);
app.use("/api", ProductCategoryRoute.Toms_Techveel_Route);
app.use("/api", ProductDescriptionRoute.Toms_Techveel_Route);
app.use("/api", CustomerRoute.Toms_Techveel_Route);
app.use("/api", SupplierRoute.Toms_Techveel_Route);
app.use("/api", CompanyRoute.Toms_Techveel_Route);
app.use("/api", LocationRoute.Toms_Techveel_Route);

//Transactions
app.use("/api", PurchaseDetailsRoute.Toms_Techveel_Route);
app.use("/api", PurchaseInvoiceRoute.Toms_Techveel_Route);
app.use("/api", SalesDetailsRoute.Toms_Techveel_Route);
app.use("/api", SalesInvoiceRoute.Toms_Techveel_Route);

app.listen(config.port, () => {
  console.log("app listening on url http://localhost:" + config.port);
});
