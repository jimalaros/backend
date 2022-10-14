const { query } = require("../db");

class Category{

    constructor(data){
        const {name} = data
        this.name = name
    }

    static async getCategories(){
        const result = await query("SELECT * FROM category")

        if(result.success && result.data[0]){
            return {
                success:true,
                data:result.data[0]
            }
        }

        return {
            success: false,
            message: "There are no categories inside the database"
        }
    }

    static async getProductsByCategory(cateoryId){
        const result = await query("SELECT * FROM category WHERE id = ?",[cateoryId])

        if(result.success && result.data[0]){
            return {
                success:true,
                data:result.data[0]
            }
        }

        return {
            success: false,
            message: "The category doesn't exist"
        }
    }
}

module.exports = Category;