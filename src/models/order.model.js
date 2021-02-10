const { ORDER_STATUS } = require('../constants');

class OrderModel {
  constructor(properties) {
    const {
      id,
      products,
      discountProducts,
      totalPrice,
    } = properties;

    this.id = id;
    this.totalPrice = totalPrice;
    this.status = ORDER_STATUS.open;
    this.products = products;
    this.discountProducts = discountProducts;
  }

  getOrder() {
    return {
      id: this.id,
      totalPrice: this.totalPrice,
      products: this.products.map(item => ({
        name: item.name,
        price: item.price,
      })),
      discountProducts: this.discountProductsmap(item => ({
        name: item.name,
        discount: item.discount,
      }))
    };
  }
}

module.exports = {
  OrderModel,
};
