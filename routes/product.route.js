const express = require('express');
const { getCategories, getProducts } = require('../controllers/product.controller');

const router = express.Router();

router.get('/categories', getCategories);

router.get('/products', getProducts);

module.exports = router;