const membershipData = [
  {
    name: 'Youth',
    value: 'WAU 2023 Youth T-Shirt - 14',
    status: '',
  },
  {
    name: '2023 Junior Core Pack',
    value: '2023 Junior Core Pack',
    status: '',
  },
  {
      name: 'Youth',
    value: 'WAU 2023 Youth T-Shirt - 15',
    status: '',
  },
];

const logData = membershipData.find((f) => f.name === 'Youth');

console.log(logData);
