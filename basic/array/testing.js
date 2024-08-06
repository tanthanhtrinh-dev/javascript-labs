const discounts = [
    {
        "amount" : "7.04",
        "amount_set" : {
            "shop_money" : {
                "amount" : "7.04",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "7.04",
                "currency_code" : "AUD"
            }
        },
        "discount_application_index" : 0
    },
    {
        "amount" : "21.00",
        "amount_set" : {
            "shop_money" : {
                "amount" : "21.00",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "21.00",
                "currency_code" : "AUD"
            }
        },
        "discount_application_index" : 1
    },
    {
        "amount" : "12.19",
        "amount_set" : {
            "shop_money" : {
                "amount" : "12.19",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "12.19",
                "currency_code" : "AUD"
            }
        },
        "discount_application_index" : 0
    },
    {
        "amount" : "0.00",
        "amount_set" : {
            "shop_money" : {
                "amount" : "0.00",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "0.00",
                "currency_code" : "AUD"
            }
        },
        "discount_application_index" : 2
    },
    {
        "amount" : "10.77",
        "amount_set" : {
            "shop_money" : {
                "amount" : "10.77",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "10.77",
                "currency_code" : "AUD"
            }
        },
        "discount_application_index" : 0
    },
    {
        "amount" : "10.00",
        "amount_set" : {
            "shop_money" : {
                "amount" : "10.00",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "10.00",
                "currency_code" : "AUD"
            }
        },
        "discount_application_index" : 2
    },
    {
        "amount" : "33.00",
        "amount_set" : {
            "shop_money" : {
                "amount" : "33.00",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "33.00",
                "currency_code" : "AUD"
            }
        },
        "discount_application_index" : 3
    },
    {
        "amount" : "20.00",
        "amount_set" : {
            "shop_money" : {
                "amount" : "20.00",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "20.00",
                "currency_code" : "AUD"
            }
        },
        "discount_application_index" : 3
    },
    {
        "amount" : "20.00",
        "amount_set" : {
            "shop_money" : {
                "amount" : "20.00",
                "currency_code" : "AUD"
            },
            "presentment_money" : {
                "amount" : "20.00",
                "currency_code" : "AUD"
            }
        },
        "discount_application_index" : 4
    }
];

const discount_applications = [
    {
        "target_type" : "line_item",
        "type" : "automatic",
        "value" : "30.0",
        "value_type" : "fixed_amount",
        "allocation_method" : "across",
        "target_selection" : "all",
        "title" : "Test automatic order discount"
    },
    {
        "target_type" : "line_item",
        "type" : "automatic",
        "value" : "30.0",
        "value_type" : "percentage",
        "allocation_method" : "each",
        "target_selection" : "entitled",
        "title" : "Test automated item discount"
    },
    {
        "target_type" : "line_item",
        "type" : "automatic",
        "value" : "10.0",
        "value_type" : "fixed_amount",
        "allocation_method" : "each",
        "target_selection" : "entitled",
        "title" : "Test automatic buy x get y"
    },
    {
        "target_type" : "shipping_line",
        "type" : "automatic",
        "value" : "100.0",
        "value_type" : "percentage",
        "allocation_method" : "each",
        "target_selection" : "all",
        "title" : "Test automatic free shipping discount"
    },
    {
        "target_type" : "line_item",
        "type" : "discount_code",
        "value" : "30.0",
        "value_type" : "percentage",
        "allocation_method" : "each",
        "target_selection" : "entitled",
        "code" : "TESTDISCOUNT2"
    },
    {
        "target_type" : "line_item",
        "type" : "discount_code",
        "value" : "20.0",
        "value_type" : "fixed_amount",
        "allocation_method" : "across",
        "target_selection" : "entitled",
        "code" : "TESTDISCOUNT4"
    }
];

let indexAppli = discount_applications.findIndex((num, idx, arr) => {
    console.log(num);
    console.log(idx);
    console.log(arr);
});

//console.log(indexAppli);

let discountItems = discounts.map(m=>({
    amount: m.amount,
    discount_application: discount_applications[m.discount_application_index],
})).filter(f=>f.discount_application.target_type === "line_item");


let discountList = discount_applications.filter(f=>f.target_type==="line_item").map((m, index)=>({
    amount: discounts.filter(f=>f.discount_application_index === index).reduce((total, item, currentIndex)=>{
        if(item?.amount_set?.shop_money?.amount)
        {
            return (total + Number.parseFloat(item?.amount_set?.shop_money?.amount));
        }        
    }, 0.0),
    name: m.title ?? `${m.code}`,
}));

//console.log(discountItems);

// let totalDiscount = discountItems.reduce((total, item)=>{
//     return (total + Number.parseFloat(item.amount));
// }, 0.0);

// console.log(totalDiscount);