class ProductModel {
    constructor(properties) {
      const { id, itemName, price, tax, discount } = properties;
      this.id = id;
      this.itemName = itemName;
      this.tax = Number(tax);
      this.price =  Number(price) * this.tax;
      this.discount = discount;
    }
  
    getProduct() {
      return {
        id: this.id,
        itemName: this.itemName,
        tax: this.tax,
        price: this.price,
        discounts: this.discounts,
      };
    }
  }
  
  module.exports = {
    ProductModel,
  };
  