const get4LastCharacters = () => {
  const str = '•••• •••• •••• 1089';
  const n = 4;
  console.log(str.slice(str.length - n));
};

const get4LastCharactersM2 = () => {
  const str = '•••• •••• •••• 1089';
  const n = 4;
  console.log(str.slice(-n));
};

const testTrim = () => {
  const strTest = ' 123  ';
  console.log(strTest.length);
  console.log(strTest.trim().length);
};

const testUpperCase = () => {
  return 'aud'.toUpperCase();
};
//get4LastCharacters();
//get4LastCharactersM2();
//testTrim();

//console.log(testUpperCase());

//2023WAUTEAM45, 30Days, partner, partner45

const testConvertStringToArr = () => {
  const tags = '2023WAUTEAM45, 30Days, partner, partner45, ClientID_123'
    .split(',')
    .map((m) => m.trim());
  console.log(tags.find((f) => f === '30Days'));
  const [label, clientID] = tags.find((f) => f.includes('ClientID'))?.split('_');
  console.log(label);
  console.log(clientID);
};

const testConvertStringToArr2 = () => {
  const tags = '2023WAUTEAM45, 30Days, partner, partner45, TpfClientID_123'
    .toLowerCase()
    .split(',')
    .filter((ft) => ft.includes('30days') || ft.includes('clientid'))
    .sort()
    .map((m) => m.trim());

  console.log(tags);
  let tradingTerms, clientID;

  if (tags?.length === 2) {
    [tradingTerms, , clientID] = [tags[0], ...tags.find((f) => f.includes('clientid')).split('_')];
  }

  if (tradingTerms && clientID) {
    console.log(tradingTerms);
    console.log(clientID);
  }
};

testConvertStringToArr2();

//const colors = ['red', 'green', 'blue'];

// Destructuring assignment
