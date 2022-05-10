const { ProductCategoryType } = require('../models/product.model');

function getCategories(req, res) {
    const catArray = [];
    catArray.push({
        name: 'Animal Products',
        pictureUrl: '/assets/cat_animal.png',
        id: ProductCategoryType.ANIMAL
    });
    catArray.push({
        name: 'Accessories',
        pictureUrl: '/assets/cat_accessories.png',
        id: ProductCategoryType.ACCESSORIES
    });
    catArray.push({
        name: 'Fitness',
        pictureUrl: '/assets/cat_fitness.png',
        id: ProductCategoryType.FITNESS
    });
    catArray.push({
        name: 'Electronics',
        pictureUrl: '/assets/cat_electronics.png',
        id: ProductCategoryType.ELECTRONICS
    });
    catArray.push({
        name: 'Books',
        pictureUrl: '/assets/cat_books.png',
        id: ProductCategoryType.BOOKS
    });
    catArray.push({
        name: 'Kitchen',
        pictureUrl: '/assets/cat_kitchen.png',
        id: ProductCategoryType.KITCHEN
    });

    res.json(catArray);
}

function getProducts(req, res) {
    const prodArr = [];

    prodArr.push({
        description: 'This is a sample product',
        name: 'Sample product',
        discountPrice: 1000,
        price: 1500,
        sku: 'prod-1',
        stock: 5,
        pictureUrls: [
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
        ]
    });

    prodArr.push({
        description: 'This is a sample product',
        name: 'Sample product',
        discountPrice: 1000,
        price: 1500,
        sku: 'prod-1',
        stock: 5,
        pictureUrls: [
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
        ]
    });

    prodArr.push({
        description: 'This is a sample product',
        name: 'Sample product',
        discountPrice: 1000,
        price: 1500,
        sku: 'prod-1',
        stock: 5,
        pictureUrls: [
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
        ]
    });

    prodArr.push({
        description: 'This is a sample product',
        name: 'Sample product',
        discountPrice: 1000,
        price: 1500,
        sku: 'prod-1',
        stock: 5,
        pictureUrls: [
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
        ]
    });

    prodArr.push({
        description: 'This is a sample product',
        name: 'Sample product',
        discountPrice: 1000,
        price: 1500,
        sku: 'prod-1',
        stock: 5,
        pictureUrls: [
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
        ]
    });

    prodArr.push({
        description: 'This is a sample product',
        name: 'Sample product',
        discountPrice: 1000,
        price: 1500,
        sku: 'prod-1',
        stock: 5,
        pictureUrls: [
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
        ]
    });

    res.json(prodArr);
}

module.exports = {
    getCategories,
    getProducts
}