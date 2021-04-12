/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  function getCount (arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      const id = arr2.indexOf(arr1[i]);
      if (id !== -1) {
        count++;
        arr2.splice(arr2.indexOf(arr1[i]), 1);
      }
    }
    return count;
  }
  return s1Arr.length < s2Arr.length ? getCount(s2Arr, s1Arr) : getCount(s1Arr, s2Arr);
}

module.exports = getCommonCharacterCount;
