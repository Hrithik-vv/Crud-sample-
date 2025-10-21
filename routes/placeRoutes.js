const express = require('express');
const router = express.Router();
const { createPlace, getPlaces } = require('../controllers/placeController');

router.post('/create', createPlace);
router.get('/all', getPlaces);

module.exports = router;
