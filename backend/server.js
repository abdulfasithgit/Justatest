const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
//
const {notFound, errorHandler} =  require('./middlewares/errorMiddleware');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();


app.use(express.json())
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
//
app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));
