const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const districtRoutes = require('./routes/districtRoutes');
const placesRoutes = require('./routes/placeRoutes');
const categoryRoutes = require('./routes/categoryRoutes');



dotenv.config();
connectDB();

const app = express();


app.use(cors());
app.use(express.json()); 


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/districts', districtRoutes);
app.use('/api/places', placesRoutes);
app.use('/api/categories', categoryRoutes);


app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ success: false, message: err.message || 'Server Error' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
