const tax = [
    {
        "price" : "6.82",
        "rate" : 0.0625,
        "title" : "Texas State Tax",
        "price_set" : {
            "shop_money" : {
                "amount" : "6.82",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "6.82",
                "currency_code" : "AUD"
            }
        },
        "channel_liable" : true
    },
    {
        "price" : "1.09",
        "rate" : 0.01,
        "title" : "Fort Worth City Tax",
        "price_set" : {
            "shop_money" : {
                "amount" : "1.09",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "1.09",
                "currency_code" : "AUD"
            }
        },
        "channel_liable" : true
    },
    {
        "price" : "0.54",
        "rate" : 0.005,
        "title" : "Fort Worth Mta Transit",
        "price_set" : {
            "shop_money" : {
                "amount" : "0.54",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "0.54",
                "currency_code" : "AUD"
            }
        },
        "channel_liable" : true
    },
    {
        "price" : "0.54",
        "rate" : 0.005,
        "title" : "Fort Worth Crime Control",
        "price_set" : {
            "shop_money" : {
                "amount" : "0.54",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "0.54",
                "currency_code" : "AUD"
            }
        },
        "channel_liable" : true
    }
];

let taxValue = tax.reduce((accumulator, r)=> accumulator + r.rate, 0.0)

console.log(taxValue*100)
