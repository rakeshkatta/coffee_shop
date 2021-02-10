const debug = require('debug')('app:services:v1:index');
const { productsData, discountsData } = require('../../mock-data');
const { ProductModel } = require("../../models/product.model");
const { DiscountsService } = require("../../services/v1/discounts");

const ProductsService = {

  getAllProducts: () => {
    debug('executing products method');

    return Promise.resolve(productsData);
  },
  
  getProduct : (id) => {
    let result = [];
    productsData.map(item => {
      if(item.id === id){
        result.push(item)
      } 
    })
    return result;
  },

  getProductsByDiscountId: (id) => {
    const discountDataRes = discountsData.find(id => id === id);
    return discountDataRes.products.map((item) => DiscountsService.getDiscountProduct(item));
  }
};

module.exports = ProductsService;
