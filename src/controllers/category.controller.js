const Category = require("../models/category.model");
const Product = require("../models/product.model");

exports.getAll = async(req, res) => {
    const { page = 1, size } = req.query;
    
    let url = getUrl(req);

    const { limit, offset } = getPagination(page, size, req.body);

    try {
        const categories = await Category.getCategories({
            limit: limit,
            offset: offset,
        });

        const response = getPagingData(categories, page, limit, url);

        return res.status(200).json({
            response
        });

    } catch (err) { res.status(500).json(err); }
}