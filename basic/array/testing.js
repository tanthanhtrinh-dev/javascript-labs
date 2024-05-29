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
        "type" : "automatic",
        "value" : "50.0",
        "value_type" : "fixed_amount",
        "allocation_method" : "across",
        "target_selection" : "all",
        "title" : "Test automatic order discount"
    },
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
})).filter(f=>f.discount_application.target_type === "line_item" && f.discount_application.target_selection==="all");


//console.log(discountItems);

let totalDiscount = discountItems.reduce((total, item)=>{
    return (total + Number.parseFloat(item.amount));
}, 0.0);

console.log(totalDiscount);

const discount_codes = [
    {
        "code" : "TESTDISCOUNT3",
        "amount" : "41.20",
        "type" : "percentage"
    },
    {
        "code" : "TESTDISCOUNT2",
        "amount" : "9.00",
        "type" : "percentage"
    },
    {
        "code" : "TESTFREESHIP",
        "amount" : "20.00",
        "type" : "shipping"
    }
];