const LocationData = require("../../Toms_Techveel_Data/Masters/Location");

const GetAllCountry = async (req, res, next) => {
  try {
    const Locationlist = await LocationData.GetAllCountry();
    res.send(Locationlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const GetAllStates = async (req, res, next) => {
  try {
    const Locationlist = await LocationData.GetAllStates();
    res.send(Locationlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const GetAllCity = async (req, res, next) => {
  try {
    const Locationlist = await LocationData.GetAllCity();
    res.send(Locationlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};



module.exports = {
  GetAllCountry: GetAllCountry,  
  GetAllStates: GetAllStates,
  GetAllCity: GetAllCity,
};
