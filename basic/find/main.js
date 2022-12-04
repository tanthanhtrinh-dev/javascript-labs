const shopifyDomain = [
    {
        "host": "motorsportoutlet-tpf.myshopify.com",
        "id": "gid://shopify/Domain/90662469796",
        "url": "https://motorsportoutlet-tpf.myshopify.com"
    },
    {
        "host": "motorsportoutlet-tpf.account.myshopify.com",
        "id": "gid://shopify/Domain/91493335204",
        "url": "https://motorsportoutlet-tpf.account.myshopify.com"
    }
];

const hosting = shopifyDomain.find(f=>f.host.includes("myshopify.com"));

console.log(hosting);

console.log(hosting.host);
