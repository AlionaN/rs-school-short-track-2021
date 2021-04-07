/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function getSum (m) {
    const mArr = `${m}`.split('');
    return mArr.map((item) => +item).reduce((sum, cur) => sum + cur);
  }
  let nUse = n;
  while (`${nUse}`.length !== 1) {
    nUse = getSum(nUse);
  }
  return nUse;
}

module.exports = getSumOfDigits;
