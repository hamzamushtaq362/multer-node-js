const Product = require("../model/product.model");

exports.create = async function (req, res) {
    try {
        await Product.create({
            product_image: req.body.product_image,
            vendor_code: req.body.vendor_code,
            product_name: req.body.product_name.toLowerCase(),
            product_price: req.body.product_price
        })
        return res.status(201).json({ message: "Product added successfully"});
    }
    catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getProducts = async function (req, res) {
    try {
        const products=await Product.find({});
        return res.status(201).json({ 
            message: "Reterived Successfully",
            products
        });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
};

exports.searchProducts = async function (req, res) {
    try {
        const products=await Product.find({ product_name:req.body.product_name });
        return res.status(201).json({ 
            message: "Reterived Successfully",
            products
        });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
};

exports.searchProductByPrice = async function (req, res) {
    try {
        let max=req.body.max;
        let min=req.body.min;
        console.log(max,min);
        const products=await Product.find( 
            { $and: [ 
                { product_price: { $lt: min } }, 
                { product_price: { $gt: max } 
            } ] 
        } )
        return res.status(201).json({ 
            message: "Reterived Successfully",
            products
        });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
};