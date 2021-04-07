/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArr = str.split('');
  let res = '';
  const obj = {};
  strArr.forEach((item) => {
    obj[item] = 0;
  });
  strArr.forEach((item) => {
    obj[item]++;
  });
  Object.entries(obj).forEach(([key, value]) => {
    res += value > 1 ? `${value}${key}` : value;
  });
  return res;
}

module.exports = encodeLine;
