const giftCardTransactions = [
  {
    id: 5885146235136.0,
    order_id: 5026665169152.0,
    kind: 'sale',
    gateway: 'gift_card',
    status: 'success',
    message: null,
    created_at: '2022-12-27T15:47:31+11:00',
    test: false,
    authorization: null,
    location_id: null,
    user_id: null,
    parent_id: null,
    processed_at: '2022-12-27T15:47:31+11:00',
    device_id: null,
    error_code: null,
    source_name: 'checkout_one',
    receipt: {
      gift_card_id: 539685617920.0,
      gift_card_last_characters: '0x0y',
    },
    amount: '150.00',
    currency: 'AUD',
    admin_graphql_api_id: 'gid://shopify/OrderTransaction/5885146235136',
  },
  {
    id: 5885146267904.0,
    order_id: 5026665169152.0,
    kind: 'sale',
    gateway: 'gift_card',
    status: 'success',
    message: null,
    created_at: '2022-12-27T15:47:31+11:00',
    test: false,
    authorization: null,
    location_id: null,
    user_id: null,
    parent_id: null,
    processed_at: '2022-12-27T15:47:31+11:00',
    device_id: null,
    error_code: null,
    source_name: 'checkout_one',
    receipt: {
      gift_card_id: 539694170368.0,
      gift_card_last_characters: 'ayte',
    },
    amount: '97.00',
    currency: 'AUD',
    admin_graphql_api_id: 'gid://shopify/OrderTransaction/5885146267904',
  },
];

const transactions = giftCardTransactions
  ?.filter((f) => f.status === 'success')
  ?.map((m) => ({
    status: m.status,
    gift_card_last_characters: m?.receipt?.gift_card_last_characters,
    amount: m.amount,
    currency: m.currency,
    gateway: m.gateway,
  }));

console.log(transactions);
console.log(typeof transactions);
console.log(transactions?.length);
