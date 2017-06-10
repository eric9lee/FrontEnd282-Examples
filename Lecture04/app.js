var products = require('../shared_modules/Products');

products.forEach(function (product) {
    console.log(product.price);
})