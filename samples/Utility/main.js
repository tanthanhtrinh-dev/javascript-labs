class CommonUtil {
  /**
   * Check Empty Array
   * @param value
   * @returns {boolean}
   */
  static randomRanges = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  /**
   * random Delay from 500 to 1000
   * @returns {number}
   */
  static randomDelay = () => {
    return CommonUtil.randomRanges(1, 5) * 1000;
  };
}

let step = 10;
do {
  console.log(`step: ${step} - ${CommonUtil.randomDelay()}`);
  step--;
} while (step > 0);
