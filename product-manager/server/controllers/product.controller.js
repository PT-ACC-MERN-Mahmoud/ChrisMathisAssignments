const Product = require("../models/product.model.js");

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {res.json(newProduct)})
            .catch((err) => console.log(err));
    },

    allProducts: (req, res) => {
        Product.find({})
        .then((myProducts) => {res.json(myProducts)})
        .catch((err) => console.log(err));
    },

    oneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) =>{res.json(oneProduct);})
            .catch((err) => console.log(err));
    },

    editProduct: (req, res) => {
        Product.findByIdAndUpdate({_id: req.params.id},
            req.body,
            {new:true, runValidators: true}
            )
            .then((editedProduct) => {res.json(editedProduct);})
            .catch((err) => console.log(err));
    },

    removeProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        .then((removedProduct) => {res.json(removedProduct);})
        .catch((err) => console.log(err));
    }

};