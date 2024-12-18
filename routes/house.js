const express = require("express");
const { saveHouseStructure, savePrivacyType, saveLocation, saveFloorPlan, saveAmenities, savePhotos, saveTitle, saveHighlight, saveDescription, saveGuestType, savePrices, saveSecurity, getHouseDetails, publishList, getAllListing, getListingDataWithCat, getOneListing } = require("../controllers/houseController.js");
const { verifyJwtToken } = require("../middleware/jwt.js");
const router = express.Router();
const houseController = require('../controllers/houseController');
router.use(express.json())

router.get("/getalllisting",houseController.getAllListing);

router.post("/roomdetails",houseController.getOneListing)
router.post("/getlistingwithcat", houseController.getListingDataWithCat)

router.post("/gethousedetails", verifyJwtToken, getHouseDetails)
router.post("/savestructure", verifyJwtToken, saveHouseStructure)
router.post("/saveprivacy_type", verifyJwtToken, savePrivacyType)
router.post("/savehouselocation", verifyJwtToken, saveLocation)
router.post("/savefloorplan", verifyJwtToken, saveFloorPlan)
router.post("/saveamenities", verifyJwtToken, saveAmenities)
router.post("/savephotos", verifyJwtToken, savePhotos)
router.post("/savetitle", verifyJwtToken, saveTitle)
router.post("/savehighlight", verifyJwtToken, saveHighlight)
router.post("/savedescription", verifyJwtToken, saveDescription)
router.post("/saveguesttype", verifyJwtToken, saveGuestType)
router.post("/saveprices", verifyJwtToken, savePrices)
router.post("/savesecurity", verifyJwtToken, saveSecurity)
router.post("/publishlist", verifyJwtToken, publishList)

module.exports = router