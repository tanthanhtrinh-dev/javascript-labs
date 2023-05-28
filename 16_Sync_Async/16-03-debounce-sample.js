function debounce(callback, wait) {
  let timeoutId;
  console.log(`Call debounce ${timeoutId}`);
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, wait);
  };
}
function log() {
  console.log('tada');
}

// log();
// log();
// log();
// log();
// log();
// log tada 5 times
const debounceLog = debounce(log, 500);
debounceLog();
debounceLog();
debounceLog();
debounceLog();
debounceLog();
// log tada only 1 time
