const Product = require('../models/productModel');


exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, stock } = req.body;

    if (!title || !price) {
      return res.status(400).json({ success: false, message: 'Title and price are required' });
    }

    
    const existing = await Product.findOne({ title });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Product with this title already exists' });
    }

    const product = await Product.create({
      title,
      description,
      price,
      stock
    });

    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error('Create product error', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (error) {
    console.error('Get products error', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    res.json({ success: true, product });
  } catch (error) {
    console.error('Get product by ID error', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    Object.assign(product, req.body);
    await product.save();

    res.json({ success: true, product });
  } catch (error) {
    console.error('Update product error', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    await product.deleteOne();
    res.json({ success: true, message: 'Product removed' });
  } catch (error) {
    console.error('Delete product error', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
