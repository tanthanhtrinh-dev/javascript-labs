const discount_codes = [
    {
        "code" : "TESTDISCOUNT3",
        "amount" : "41.20",
        "type" : "percentage"
    },
    {
        "code" : "TESTDISCOUNT4",
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

let discount_applications = [
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

//let newDiscount = discount_codes.concat(discount_applications);

let discountOffOrder = discount_applications.filter(f=>f.target_selection === "all" && f.type == "discount_code" && f.target_type === "line_item" && f.code)
.map((item, index) => {
   
   let discount_item = {};
   //console.log(item.code); 
   discount_item.amount = discount_codes.find(f=>f.code === item.code)?.amount ?? 0.0;
   discount_item.name = `Discount - ${item.code}`
   //Amount: discount_codes.find(f=>f.code === item.code)?.amount,
   //Name: `Discount - ${item.code}`,
   return discount_item;
});

console.log(discountOffOrder);;