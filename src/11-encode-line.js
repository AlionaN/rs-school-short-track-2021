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
  let count = 1;
  for (let i = 1; i < strArr.length; i++) {
    if (i === strArr.length - 1 && strArr[i] === strArr[i - 1]) {
      count++;
      res += count > 1 ? `${count}${strArr[i - 1]}` : strArr[i - 1];
    } else if (i === strArr.length - 1 && strArr[i] !== strArr[i - 1]) {
      res += count > 1 ? `${count}${strArr[i - 1]}` : strArr[i - 1];
      res += strArr[i];
    } else if (strArr[i] === strArr[i - 1]) {
      count++;
    } else {
      res += count > 1 ? `${count}${strArr[i - 1]}` : strArr[i - 1];
      count = 1;
    }
  }
  return res;
}

module.exports = encodeLine;
