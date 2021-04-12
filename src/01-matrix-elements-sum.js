/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const m = matrix[0];
  for (let i = 0; i < m.length; i++) {
    let a = [];
    for (let k = 0; k < matrix.length; k++) {
      a.push(matrix[k][i]);
      if (k === matrix.length - 1) {
        const zero = a.lastIndexOf(0);
        if (zero === 0) {
          [a] = a;
        } else if (zero !== -1) {
          a = a.slice(0, zero);
        }
        if (a.length <= 1) {
          [a] = a;
        } else if (a !== 0) {
          a = a.reduce((prev, cur) => prev + cur);
        }
        sum += a;
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
