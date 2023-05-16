export const testConvertStringToArr = () => {
  const tags = '2023WAUTEAM45, 30Days, partner, partner45, ClientID_123'
    .split(',')
    .map((m) => m.trim());
  console.log(tags.find((f) => f === '30Days'));
  const [label, clientID] = tags.find((f) => f.includes('ClientID'))?.split('_');
  console.log(label);
  console.log(clientID);
};

export const testConvertStringToArr2 = () => {
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
