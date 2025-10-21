const District = require('../models/districtModel');


exports.createDistrict = async (req, res) => {
  try {
    const district = await District.create(req.body);
    res.status(201).json(district);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.getDistricts = async (req, res) => {
  try {
    const districts = await District.find();
    res.json(districts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
