const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer({dest: './public/uploads'});
const axios = require('axios');

const miscController = require('../controllers/misc.controller');
const fileUploader = require('../configs/cloudinary.config');
const stationsController = require('../controllers/stations.controller');

/*---------------
    ROUTES
---------------*/
router.get('/', miscController.renderHome);

/*STATIONS*/
router.get('/station/:stationId/:stationDistrict', stationsController.renderStation);

module.exports = router;
