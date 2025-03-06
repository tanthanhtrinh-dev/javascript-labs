const line_items = [
    {
        "id" : 15278026752290.0,
        "name" : "Personalised The Wiggles Adult Costume T-shirt - TEST - Red / M",
        "price" : "34.99",     
        "properties": [], 
    },
    {
        "id" : 15278026785058.0,
        "name" : "Item Personalization",
        "price" : "5.95",
        "properties" : [
            {
                "name" : "_Customization For",
                "value" : "Personalised The Wiggles Adult Costume T-shirt - TEST - Red / M (Line Item Number-1)"
            },
            {
                "name" : "_pplr_customization_id",
                "value" : "1116547511"
            },
            {
                "name" : "Personalised Positions",
                "value" : "Both Front & Back"
            },
            {
                "name" : "Front",
                "value" : "RONALDO"
            },
            {
                "name" : "Back",
                "value" : "CR7"
            },
            {
                "name" : "Preview",
                "value" : "https://cdn.shopify.com/s/files/1/0862/4134/5826/uploads/6e79b17112b772bdb3e823f62f2697be.png"
            },
            {
                "name" : "_pplr_preview",
                "value" : "Preview"
            }
        ],
    },
    {
        "id" : 15278026817826.0,        
        "name" : "Personalised The Wiggles Adult Costume T-shirt - TEST - Purple / 2XL",
        "price" : "34.99",  
        "properties": [],
    },
    {
        "id" : 15278026850594.0,
        "name" : "Item Personalization",
        "price" : "4.95", 
        "properties" : [
            {
                "name" : "_Customization For",
                "value" : "Personalised The Wiggles Adult Costume T-shirt - TEST - Purple / 2XL (Line Item Number-2)"
            },
            {
                "name" : "_pplr_customization_id",
                "value" : "1975199532"
            },
            {
                "name" : "Personalised Positions",
                "value" : "Back Only"
            },
            {
                "name" : "Back Only",
                "value" : "BULL"
            },
            {
                "name" : "Preview",
                "value" : "https://cdn.shopify.com/s/files/1/0862/4134/5826/uploads/6dc7e576f7c72c03617fe857ef659570.png"
            },
            {
                "name" : "_pplr_preview",
                "value" : "Preview"
            }
        ],        
    
    },
    {
        "id" : 15278026883362.0,
        "name" : "Personalised The Wiggles Adult Costume T-shirt - TEST - Yellow / XL",
        "price" : "34.99",
    },
    {
        "id" : 15278026916130.0,
        "name" : "Item Personalization",
        "price" : "1.95",
        "properties" : [
            {
                "name" : "_Customization For",
                "value" : "Personalised The Wiggles Adult Costume T-shirt - TEST - Yellow / XL (Line Item Number-3)"
            },
            {
                "name" : "_pplr_customization_id",
                "value" : "536151652"
            },
            {
                "name" : "Personalised Positions",
                "value" : "Front Only"
            },
            {
                "name" : "Front Only",
                "value" : "GABBY"
            },
            {
                "name" : "Preview",
                "value" : "https://cdn.shopify.com/s/files/1/0862/4134/5826/uploads/6f00f501e866b53e1871cebd5ec86564.png"
            },
            {
                "name" : "_pplr_preview",
                "value" : "Preview"
            }
        ],    
    }
]

const personalizedItems = line_items.filter(f=>f.name === "Item Personalization").map((m)=>({
    id: m.id,
    name: m.name,
    price: m.price,
    personalisedKey: m.properties.find(f=>f.name === "_Customization For")?.value ?? "",
    personalisedPositions: m.properties.find(f=>f.name === "Personalised Positions")?.value ?? "",
    personalisedFrontText: m.properties.find(f=>f.name === "Front Only")?.value ?? m.properties.find(f=>f.name === "Front")?.value ?? "",
    personalisedBackText: m.properties.find(f=>f.name === "Back Only")?.value ?? m.properties.find(f=>f.name === "Back")?.value ?? "",
}));

line_items.forEach((item, index)=>{

    let positionIndex = index+1;
    const itemKey = `${item.name} (Line Item Number-${positionIndex})`;
    let personalizedItem = personalizedItems.find(f=>f.personalisedKey === itemKey);

    if(personalizedItem)
    {
        console.info(personalizedItem);
    }
    

});