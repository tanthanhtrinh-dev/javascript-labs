
const randomRanges = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const showRandom = () => console.log(`Random ${randomRanges(1,10)*100}`);

setInterval(showRandom,1000);



