const complexArray = [
    [
      {
        amount: "7.04",
        amount_set: {
          shop_money: {
            amount: "7.04",
            currency_code: "AUD",
          },
          presentment_money: {
            amount: "7.04",
            currency_code: "AUD",
          },
        },
        discount_application_index: 0,
      },
      {
        amount: "21.00",
        amount_set: {
          shop_money: {
            amount: "21.00",
            currency_code: "AUD",
          },
          presentment_money: {
            amount: "21.00",
            currency_code: "AUD",
          },
        },
        discount_application_index: 1,
      },
    ],
    [
      {
        amount: "12.19",
        amount_set: {
          shop_money: {
            amount: "12.19",
            currency_code: "AUD",
          },
          presentment_money: {
            amount: "12.19",
            currency_code: "AUD",
          },
        },
        discount_application_index: 0,
      },
    ],
    [
      {
        amount: "10.77",
        amount_set: {
          shop_money: {
            amount: "10.77",
            currency_code: "AUD",
          },
          presentment_money: {
            amount: "10.77",
            currency_code: "AUD",
          },
        },
        discount_application_index: 0,
      },
      {
        amount: "10.00",
        amount_set: {
          shop_money: {
            amount: "10.00",
            currency_code: "AUD",
          },
          presentment_money: {
            amount: "10.00",
            currency_code: "AUD",
          },
        },
        discount_application_index: 2,
      },
    ],
  ]


  const flatDiscounts = complexArray.flat(Infinity);

  console.log(flatDiscounts);

  