/**
 * https://futurestud.io/tutorials/how-to-check-if-an-object-is-empty-in-javascript-or-node-js
 * @type {[{name: string, value: string},{name: string, value: string},{name: string, value: string},{name: string, value: string},{name: string, value: string},null,null]}
 */
const arrProperties = [
    {
        "name": "handing-fee",
        "value": "Handling fee + $4.95"
    },
    {
        "name": "MembershipData_FirstName",
        "value": "Min"
    },
    {
        "name": "MembershipData_LastName",
        "value": "Nguyen"
    },
    {
        "name": "WH_Code",
        "value": "ST8M822-P-003"
    },
    {
        "name": "2022 Platinum Ride Core Pack",
        "value": "2022 Platinum Ride Core Pack"
    },
    {
        "name": "2022 Team polo",
        "value": "Men's [M]"
    },
    {
        "name": "_gpo_product_group",
        "value": 1664764181021.0
    }
];

const GetMemberData = (items) => {
    let membershipData = {};
    let mFirstName = items.find(f => f.name === 'MembershipData_FirstName');
    if (mFirstName && mFirstName.value.length > 0) {
        membershipData.Fname = mFirstName.value.trim();
    }
    let mLastName = items.find(f => f.name === 'MembershipData_LastName');
    if (mLastName && mLastName.value.length > 0) {
        membershipData.Lname = mLastName.value.trim();
    }
    return membershipData;
}

function isEmpty(object) {
    return Object.keys(object).length === 0
}

const memberData = GetMemberData(arrProperties);

console.log(isEmpty(memberData));
