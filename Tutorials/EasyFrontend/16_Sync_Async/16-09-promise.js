// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomInt = Date.now();
//     const value = randomInt % 10;
//     if (value < 8) {
//       resolve(1);
//     } else {
//       reject(new Error('Oop!'));
//     }
//   }, 3000);
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log('Finally');
//   });

// Promise.resolve(5)
//   .then((n) => n * 2) //10
//   .then((n) => n * 3) //30
//   //.then((n) => Promise.resolve(n * 2))
//   .then((n) => {
//     const finalNumber = n + 10; //40
//     console.info(finalNumber);
//     return finalNumber;
//   })
//   .catch((error) => console.log(error));

fetch('https://js-post-api.herokuapp.com/api/students?_page=1')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
