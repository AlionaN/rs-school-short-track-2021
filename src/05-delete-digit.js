/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = `${n}`;
  const nArr = nStr.split('');
  nArr.splice(Math.max(nArr), 1);
  return nArr.join('');
}

module.exports = deleteDigit;
