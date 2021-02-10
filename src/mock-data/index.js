const productsData = [
    {
      'id': 'item1',
      'itemName': 'waterBottle',
      'price': 10.00,
      'tax':0.00,
      'discount': ['discount1', 'discount2']
    },
    {
      'id': 'item2',
      'itemName': 'coffee',
      'price': 40.00,
      'tax':1.00,
      'discount': ['discount2']
    },
    {
      'id': 'item3',
      'itemName': 'mocha',
      'price': 35.00,
      'tax':2.00,
      'discount': ['discount2']
    }
];

const discountsData = [
    {
      'id': 'discount1',
      'discountType': ['combo', 'single'],
      'discount': 1.00,
      'products': ['item1', 'item2']
    },
    {
      'id': 'discount2',
      'discountType': ['combo', 'single'],
      'discount': 2.00,
      'products': ['item2']
    }
  ]

  const orderData = [
    {
        'orderID': 'order1',
        'items':[],
        'total': 0.00,
    }   
  ]

  module.exports = {
    productsData,
    discountsData,
    orderData,
  }
