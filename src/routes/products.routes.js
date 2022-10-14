const express = require("express");

const Products = require("../controllers/product.controller");

const router = express.Router();

router.get("/", Products.getAll);
router.get("/:id", Products.getById);

module.exports = router;