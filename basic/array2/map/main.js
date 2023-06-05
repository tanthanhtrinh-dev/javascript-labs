const arrProperties = [
  {
    name: 'handing-fee',
    value: 'Handling fee + $4.95',
  },
  {
    name: 'MembershipData_FirstName',
    value: 'Min',
  },
  {
    name: 'MembershipData_LastName',
    value: 'Nguyen',
  },
  {
    name: 'WH_Code',
    value: 'ST8M822-P-003',
  },
  {
    name: '2022 Platinum Ride Core Pack',
    value: '2022 Platinum Ride Core Pack',
  },
  {
    name: '2022 Team polo',
    value: "Men's [M]",
  },
  {
    name: '_gpo_product_group',
    value: 1664764181021.0,
  },
];
const basicMap = () => {
  const elements = ['Fire', 'Air', 'Water'];
  console.log(elements.map((m) => `name: '${m}'`).join(' OR '));
};

const basicMap2 = () => {
  console.table(
    arrProperties.map((m) => ({
      nameNew: m.name,
      val: m.value,
    }))
  );
};

const basicMap3 = () => {
  let arrNew = [];

  arrNew = [
    ...arrProperties.map((m) => ({
      nameNew: m.name,
      val: m.value,
    })),
  ];

  console.table(arrNew);
};

//basicMap();
//basicMap2();

const discount_codes = [
  {
    code: '22AMPOLSTAFF45',
    amount: '42.52',
    type: 'percentage',
  },
  {
    code: '22AMPOLSTAFF46',
    amount: '42.52',
    type: 'percentage',
  },
];

console.log(discount_codes.map((m) => m.code).toString());
