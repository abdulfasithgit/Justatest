const express = require('express');
const router = express.Router()
//
const {getProducts,  getProductsById} = require('../controllers/productController');
const protect = require('../middlewares/authMiddleware');
//@desc fetch all products
//@route GET /api/products
//access Public
router.route('/').get(protect, getProducts);
router.route('/:id').get(protect, getProductsById);
module.exports = router;