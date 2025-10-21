const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('Place', placeSchema);
