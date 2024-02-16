let item = {
  admin_graphql_api_id: 'gid://shopify/LineItem/13634545549568',
  discount_allocations: [
    {
      amount: '47.50',
      amount_set: {
        presentment_money: {
          amount: '47.50',
          currency_code: 'AUD',
        },
        shop_money: {
          amount: '47.50',
          currency_code: 'AUD',
        },
      },
      discount_application_index: 0,
    },
  ],
  duties: [],
  fulfillable_quantity: 1,
  fulfillment_service: 'manual',
  fulfillment_status: null,
  gift_card: false,
  grams: 500,
  id: 13634545549568,
  name: 'Red Bull Ampol Racing Team Mechanic Logo Shirt - XL',
  price: '95.00',
  price_set: {
    presentment_money: {
      amount: '95.00',
      currency_code: 'AUD',
    },
    shop_money: {
      amount: '95.00',
      currency_code: 'AUD',
    },
  },
  product_exists: true,
  product_id: 8085004583168,
  properties: [],
  quantity: 1,
  requires_shipping: true,
  sku: 'P000249415',
  tax_lines: [
    {
      channel_liable: false,
      price: '4.32',
      price_set: {
        presentment_money: {
          amount: '4.32',
          currency_code: 'AUD',
        },
        shop_money: {
          amount: '4.32',
          currency_code: 'AUD',
        },
      },
      rate: 0.1,
      title: 'GST',
    },
  ],
  taxable: true,
  title: 'Red Bull Ampol Racing Team Mechanic Logo Shirt',
  total_discount: '0.00',
  total_discount_set: {
    presentment_money: {
      amount: '0.00',
      currency_code: 'AUD',
    },
    shop_money: {
      amount: '0.00',
      currency_code: 'AUD',
    },
  },
  variant_id: 43479119266048,
  variant_inventory_management: 'shopify',
  variant_title: 'XL',
  vendor: 'Red Bull Ampol Racing Official Team Store',
};

//console.info(rawdata);
console.info(item.discount_allocations?.length);


let discount = Number.parseFloat(item.discount_allocations.reduce((total, d) => {
    return (total + d.amount);
  }, 0));

  console.info(
    discount
  );
console.info(typeof(discount))