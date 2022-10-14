const { query } = require("../db");

class ProductsByCategory{

    constructor(data){
        const {nameProduct} = data
        this.nameProduct = nameProduct
    }

    static async getProductsByCategory(){
        return query(
            "SELECT product.name AS nameProduct, category.name AS nameCategory FROM product, category WHERE product.category = category.id"
        )
    }
}

module.exports = ProductsByCategory;