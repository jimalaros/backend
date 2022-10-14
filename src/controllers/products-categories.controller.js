const ProductsByCategory = require("../models/products-categories.model");

const { Category } = require('../models/category.model');

exports.getAll = async(req, res) => {
    try {
        const products = await ProductsByCategory.getProductsByCategory();
        const response = products.data;

        let bebidaEnergetica = response.filter(product => product.nameCategory == "bebida energetica");
        let pisco = response.filter(product => product.nameCategory == "pisco");
        let ron = response.filter(product => product.nameCategory == "ron");
        let bebida = response.filter(product => product.nameCategory == "bebida");
        let snack = response.filter(product => product.nameCategory == "snack");
        let cerveza = response.filter(product => product.nameCategory == "cerveza");
        let vodka = response.filter(product => product.nameCategory == "vodka");

        //let updatedBebidaEnergetica  = _.omit(bebidaEnergetica, "nameCategory");
        //let updatedPisco  = _.omit(pisco, "nameCategory");
        //let updatedRon  = _.omit(ron, "nameCategory");
        //let updatedBebida  = _.omit(bebida, "nameCategory");
        //let updatedSnack  = _.omit(snack , "nameCategory");
        //let updatedCerveza  = _.omit(cerveza , "nameCategory");
        //let updatedVodka  = _.omit(vodka , "nameCategory");
        
        return res.status(200).json({
            bebidaEnergetica,
            pisco,
            ron,
            bebida,
            snack,
            cerveza,
            vodka
        });


    } catch (err) { console.log(err) }
}

