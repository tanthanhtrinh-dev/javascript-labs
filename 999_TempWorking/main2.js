let item =  [
    {
        "code" : "GREET20GMSV",
        "amount" : "20.00",
        "type" : "fixed_amount"
    },
    {
        "code" : "GMSVFREESHIP",
        "amount" : "18.65",
        "type" : "shipping"
    }
];

//let discountValue = item.reduce((total, dc)=>{return (total + Number.parseFloat(dc.amount));}, 0.0);
//console.log(discountValue);

let discount_applications =  [
    {
        "target_type" : "line_item",
        "type" : "automatic",
        "value" : "50.0",
        "value_type" : "percentage",
        "allocation_method" : "across",
        "target_selection" : "entitled",
        "title" : "50% Off"
    },
    {
        "target_type" : "shipping_line",
        "type" : "discount_code",
        "value" : "100.0",
        "value_type" : "percentage",
        "allocation_method" : "each",
        "target_selection" : "entitled",
        "code" : "RBARFREESHIP"
    }
];

let isOrderAppliesDiscount = discount_applications.some(f=>f.target_type === 'line_item' && f.code?.length);
console.log(isOrderAppliesDiscount);


let discount_application2 =  [
    {
        "target_type" : "line_item",
        "type" : "automatic",
        "value" : "50.0",
        "value_type" : "percentage",
        "allocation_method" : "across",
        "target_selection" : "entitled",
        "title" : "50% Off"
    },
    {
        "target_type" : "shipping_line",
        "type" : "discount_code",
        "value" : "100.0",
        "value_type" : "percentage",
        "allocation_method" : "each",
        "target_selection" : "entitled",
        "code" : "RBARFREESHIP"
    }
];

let isOrderAppliesDiscount2 = discount_application2.some(f=>f.target_type === 'line_item' && f.code?.length);
console.log(isOrderAppliesDiscount2);
