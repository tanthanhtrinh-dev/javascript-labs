const arrayWithDuplicates = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' },
];

try {
  const uniqueArray = Array.from(new Set(arrayWithDuplicates.map(JSON.stringify))).map(JSON.parse);
  console.log(uniqueArray);
  console.table(uniqueArray);
} catch (error) {
  console.log(error);
} finally {
  console.table(arrayWithDuplicates);
}
