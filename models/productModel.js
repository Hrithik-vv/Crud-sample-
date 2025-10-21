const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
