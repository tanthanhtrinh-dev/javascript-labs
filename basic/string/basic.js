export const get4LastCharacters = () => {
  const str = '•••• •••• •••• 1089';
  const n = 4;
  console.log(str.slice(str.length - n));
};

export const get4LastCharactersM2 = () => {
  const str = '•••• •••• •••• 1089';
  const n = 4;
  console.log(str.slice(-n));
};

export const testTrim = () => {
  const strTest = ' 123  ';
  console.log(strTest.length);
  console.log(strTest.trim().length);
};

export const testUpperCase = () => {
  return 'aud'.toUpperCase();
};
