/**
 *
 * https://www.compart.com/en/unicode/U+2026
 */
const textTruncate = (text, maxLength) => {
  if (text.length <= maxLength) return text;

  const shortStr = text.slice(0, maxLength - 1);
  return `${shortStr}\u2026`;
};

console.log(textTruncate('Hello', 4));

//const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// // Expected output: "the lazy dog."
//
// console.log(str.slice(4, 19));
// // Expected output: "quick brown fox"
//
// console.log(str.slice(-4));
// // Expected output: "dog."
//
// console.log(str.slice(-9, -5));
// // Expected output: "lazy"
