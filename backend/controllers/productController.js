const products = require('../data/products')

const getProducts = (req, res)=>{
    const productList = products;
    res.json(productList);
}

const getProductsById = (req, res)=>{
    const product = products.find(p=>p.id==req.params.id)
    if(product ){
        res.json(product);
    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }
}

module.exports ={getProducts, getProductsById}