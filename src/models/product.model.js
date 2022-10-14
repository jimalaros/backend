const { query } = require("../db");

class Product{

    constructor(data){
        const {name,url_image,price,discount,category} = data
        this.name = name
        this.url_image = url_image 
        this.price = price
        this.discount = discount
        this.category = category
    }

    static async getProducts(){
        return query("SELECT * FROM product")
    }
    static async getProductsById(id){
        return query("SELECT * FROM product WHERE id=?",[id])
    }
}

module.exports = Product;