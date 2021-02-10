const debug = require('debug')('app:services:v1:index');
const { discountsData, productsData } = require("../../mock-data");
const { DiscountProductModel } = require('../../models/discount-product.model');

const DiscountsService = {

  getAllDiscounts: () => {
    debug('executing discounts method');

    return Promise.resolve(discountsData);
  },

  getDiscountProduct: discountProduct => {
    return {
      'id': 'discount1',
      'discountType': ['combo', 'single'],
      'discount': 1.00,
      'products': ['item1', 'item2']
    };
  }


};

module.exports = {
  DiscountsService,
};