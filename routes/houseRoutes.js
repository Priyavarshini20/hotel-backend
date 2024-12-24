const express = require("express");
const { saveHouseStructure, savePrivacyType, saveLocation, saveFloorPlan, saveAmenities, savePhotos, saveTitle, saveHighlight, saveDescription, saveGuestType, savePrices, saveSecurity, getHouseDetails, publishList, getAllListing, getListingDataWithCat, getOneListing } = require("../controllers/houseController.js");
const { verifyJwtToken } = require("../middleware/jwt.js");
const houseRouter = express.Router();
const houseController = require('../controllers/houseController.js');
//router.use(express.json())

houseRouter.get("/getalllisting", verifyJwtToken, houseController.getAllListing);

houseRouter.post("/roomdetails",houseController.getOneListing)
houseRouter.post("/getlistingwithcat", houseController.getListingDataWithCat)

houseRouter.post("/gethousedetails", verifyJwtToken, getHouseDetails)
houseRouter.post("/savestructure", verifyJwtToken, saveHouseStructure)
houseRouter.post("/saveprivacy_type", verifyJwtToken, savePrivacyType)
houseRouter.post("/savehouselocation", verifyJwtToken, saveLocation)
houseRouter.post("/savefloorplan", verifyJwtToken, saveFloorPlan)
houseRouter.post("/saveamenities", verifyJwtToken, saveAmenities)
houseRouter.post("/savephotos", verifyJwtToken, savePhotos)
houseRouter.post("/savetitle", verifyJwtToken, saveTitle)
houseRouter.post("/savehighlight", verifyJwtToken, saveHighlight)
houseRouter.post("/savedescription", verifyJwtToken, saveDescription)
houseRouter.post("/saveguesttype", verifyJwtToken, saveGuestType)
houseRouter.post("/saveprices", verifyJwtToken, savePrices)
houseRouter.post("/savesecurity", verifyJwtToken, saveSecurity)
houseRouter.post("/publishlist", verifyJwtToken, publishList)

module.exports = houseRouter;