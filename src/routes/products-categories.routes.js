const express = require("express");

const ProductsByCategory = require("../controllers/products-categories.controller");

const router = express.Router();

router.get("/", ProductsByCategory.getAll);

module.exports = router;