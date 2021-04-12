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
  let nStr = `${n}`;
  let nArr = nStr.split('');
  nArr = nArr.map((item) => +item);
  nArr.splice(nArr.indexOf(Math.min(...nArr)), 1);
  nStr = nArr.join('');
  nStr = +nStr;
  return nStr;
}

module.exports = deleteDigit;
