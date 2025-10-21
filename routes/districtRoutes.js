const express = require('express');
const router = express.Router();
const { createDistrict, getDistricts } = require('../controllers/districtController');


router.post('/create', createDistrict);
router.get('/all', getDistricts);     

module.exports = router;
