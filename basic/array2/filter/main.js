const membershipData = [
  {
    "name" : "Youth T-Shirt",
    "value" : "WAU 2023 Youth T-Shirt - 14"
  },
  {
    "name" : "2023 Junior Core Pack",
    "value" : "2023 Junior Core Pack"
  },
  {
    "name" : "Is_FF",
    "value" : "Is Fulfillment"
  },
  {
    "name" : "Membership_Email",
    "value" : "Benbrook1980@gmail.com"
  },
  {
    "name" : "Membership_LastName",
    "value" : "Brook"
  },
  {
    "name" : "Membership_FirstName",
    "value" : "Noah "
  },
  {
    "name" : "Membership_DOB",
    "value" : "06-11-2013"
  }
];

let membershipInfos = membershipData.filter(f=>!f.name.includes("Membership_") && !f.name.includes("Is_FF"));

// console.log(membershipInfos);
// console.log(membershipInfos.length);
// console.log(typeof membershipInfos);

const membershipData2 = [  {
  "name" : "Membership_FirstName",
  "value" : "Noah "
}];
console.log(membershipData2?.find(f=>f.name==="Membership_FirstName")?.value?.trim().toUpperCase());
//console.log(membershipData2?.find(f=>f.name==="Membership_FirstName")?.value??"NA");
