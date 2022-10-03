
/**
 * How to Use a JS Key-Value Pair
 * https://www.freecodecamp.org/news/javascript-object-keys-tutorial-how-to-use-a-js-key-value-pair
 *
 */

const arrProperties = [
    {
        "name" : "handing-fee",
        "value" : "Handling fee + $4.95"
    },
    {
        "name" : "MembershipData_FirstName",
        "value" : "Min"
    },
    {
        "name" : "MembershipData_LastName",
        "value" : "Nguyen"
    },
    {
        "name" : "WH_Code",
        "value" : "ST8M822-P-003"
    },
    {
        "name" : "2022 Platinum Ride Core Pack",
        "value" : "2022 Platinum Ride Core Pack"
    },
    {
        "name" : "2022 Team polo",
        "value" : "Men's [M]"
    },
    {
        "name" : "_gpo_product_group",
        "value" : 1664764181021.0
    }
];

const GetMemberFirstName = (items) => {

    let mFirstName = items.find(f=>f.name === 'MembershipData_FirstName');
    if(mFirstName && mFirstName.value.length>0){
        console.log(mFirstName.value.length);
        console.log(mFirstName.value);
        console.log(mFirstName.value.trim().length);
    }

    let mLastName = items.find(f=>f.name === 'MembershipData_LastName');
    if(mFirstName && mFirstName.value.length>0){
        console.log(mLastName.value.length);
        console.log(mLastName.value);
        console.log(mLastName.value.trim().length);
    }
}

const GetMemberData = (items) => {

    let membershipData = {};

    let mFirstName = items.find(f=>f.name === 'MembershipData_FirstName');
    if(mFirstName && mFirstName.value.length>0){
        // console.log(mFirstName.value.length);
        // console.log(mFirstName.value);
        // console.log(mFirstName.value.trim().length);
        membershipData.Fname = mFirstName.value.trim();
    }

    let mLastName = items.find(f=>f.name === 'MembershipData_LastName');
    if(mLastName && mLastName.value.length>0){
        // console.log(mLastName.value.length);
        // console.log(mLastName.value);
        // console.log(mLastName.value.trim().length);
        membershipData.Lname = mLastName.value.trim();
    }

    return membershipData;
}
const checkMemberShipData = (items) => {
  const membershipData=GetMemberData(items);
  console.log(membershipData.hasOwnProperty("Fname"));
}

//GetMemberFirstName(arrProperties);
//GetMemberData(arrProperties);
checkMemberShipData(arrProperties);
