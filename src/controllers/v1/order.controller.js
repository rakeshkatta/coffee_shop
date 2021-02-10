const debug = require('debug')('app:controllers:v1:index');
const { OrderModel } = require("../../models/order.model");
const OrderService = require('../../services/v1/order');
const ProductsService = require('../../services/v1/products');
const { calculateTotalPrice } = require("../../services/v1/order");

const OrderController = {

    order: async (req, res, next) => {
        debug('executing order action');

        try {
            const orderInvoice = await OrderService.getOrderDetails();
            res.status(200).send(orderInvoice);
        } catch (err) {
            next(err);
        }
    },
    createOrder: async (req, res) => {
        try {
            const products = [];
            const discountIds = [];
            const discountsProducts = [];
            const { productsId } = req.body;
            console.log('productsId', productsId);
            if (!productsId.length) {
                res
                    .status(400)
                    .send("Select products");
                return;
            }

            productsId.forEach((id) => {
                console.log("id", id);
                products.push(ProductsService.getProduct(id));
            });
            console.log('products-->', products);
            products.forEach((product) => {
                product[0].discount.map((id) => {
                    discountIds.push(id);
                });
            });
            console.log('discountsProducts', discountsProducts);
            const totalPrice = calculateTotalPrice(products);
            console.log('totalPrice', totalPrice);

            const order = new OrderModel({
                totalPrice,
                id: Math.floor(1 + (100 - 1) * Math.random()),
                products: [...products],
                discountsProducts: [...discountsProducts],
            });
            res.status(200).send(order);
        } catch (err) {
            console.log("something went wrong");
        }
    }

};

module.exports = OrderController;
