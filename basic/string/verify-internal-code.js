

// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// const password = "Password123";

// const isValidPassword = passwordRegex.test(password);
// console.log(isValidPassword); // Output: true

const RegexExpressions = {
    /**
     * TPF Internal Code
     */
    InternalCodeFormat: /^(P?|TPF)([0-9]{9}$)/,    
    SystemPro: /^_./,
};
const properties = [
    {
        "name" : "_has_gpo",
        "value" : "827768"
    },
    {
        "name" : "Personalised_Merch_Size",
        "value" : "Mens medium"
    },
    {
        "name" : "Membership_FirstName",
        "value" : "Tania "
    },
    {
        "name" : "Membership_LastName",
        "value" : "Borley "
    },
    {
        "name" : "Membership_Email",
        "value" : "tania.borley@yahoo.com"
    },
    {
        "name" : "Membership_MemberNumber",
        "value" : "24498"
    },
    {
        "name" : "Is_FF",
        "value" : "Is Fulfillment"
    },
    {
        "name" : "WAU 2025 Lanyard With Ticket Wallet",
        "value" : "WAU 2025 Lanyard With Ticket Wallet"
    },
    {
        "name" : "WAU 2025 Fridge Magnet",
        "value" : "WAU 2025 Fridge Magnet"
    },
    {
        "name" : "WAU 2025 Bumper Sticker",
        "value" : "WAU 2025 Bumper Sticker"
    },
    {
        "name" : "WAU 2025 Key Ring",
        "value" : "WAU 2025 Key Ring"
    },
    {
        "name" : "WAU 2025 Stainless Steel Water Bottle",
        "value" : "WAU 2025 Stainless Steel Water Bottle"
    },
    {
        "name" : "2025 WAU 5-Panel Cap",
        "value" : "2025 WAU 5-Panel Cap"
    },
    {
        "name" : "WAU 2025 Ceramic Mug",
        "value" : "WAU 2025 Ceramic Mug"
    },
    {
        "name" : "WAU 2025 Cooler Bag - 6 Cans",
        "value" : "WAU 2025 Cooler Bag - 6 Cans"
    },
    {
        "name" : "WAU 2025 Beach Tote",
        "value" : "WAU 2025 Beach Tote"
    },
    {
        "name" : "WAU 2025 Polo",
        "value" : "WAU 2025 Youth Polo [2]"
    },
    {
        "name" : "WAU 2025 Welcome Letter",
        "value" : "WAU 2025 Welcome Letter"
    },
    {
        "name" : "WAU 2025 Membership Card",
        "value" : "WAU 2025 Membership Card"
    },
    {
        "name" : "_bundle_selection",
        "value" : "WAU 2025 Lanyard With Ticket Wallet <> WAU 2025 Fridge Magnet <> WAU 2025 Bumper Sticker <> WAU 2025 Key Ring <> WAU 2025 Stainless Steel Water Bottle <> 2025 WAU 5-Panel Cap <> WAU 2025 Ceramic Mug <> WAU 2025 Cooler Bag - 6 Cans <> WAU 2025 Beach Tote <> WAU 2025 Youth Polo [2] <> WAU 2025 Welcome Letter <> WAU 2025 Membership Card"
    }
];

// const internalRegex = /^(P?|TPF)([0-9]{9}$)/;
// const internalCode = "P000267543";
// const isValidInternalCode = RegexExpressions.InternalCodeValidate.test(internalCode);
// console.log(isValidInternalCode); 

const filterProperties = properties.filter(f=>!RegexExpressions.SystemPro.test(f.name));

console.log(filterProperties);
