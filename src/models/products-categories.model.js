const { query } = require("../db");

class ProductsByCategory{

    static async getProductsByCategory(){
        return query(
            "SELECT product.id AS id, product.name AS nameProduct, product.url_image AS image, product.price AS price, category.name AS nameCategory FROM product, category WHERE product.category = category.id"
        )
    }
}

module.exports = ProductsByCategory;