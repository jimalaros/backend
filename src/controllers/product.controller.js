const Product = require("../models/product.model");

exports.getAll = async(_, res) => {
    try {
        const products = await Product.getProducts();

        return res.status(200).json({
            products
        });

    } catch (err) { console.log(err) }
}

exports.getById = async(req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.getProductsById(id);

        return res.status(200).json({
            product
        });

    } catch (err) { console.log(err) }
}

