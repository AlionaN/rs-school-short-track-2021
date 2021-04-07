/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function checkMine (bool) {
    return bool === true ? 1 : 0;
  }
  function checkMatrixItem (item) {
    return checkMine(item);
  }
  const res = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      let counter = 0;
      counter += checkMatrixItem(matrix[i][k]);
      if (i === 0) {
        if (k === 0) {
          counter += checkMatrixItem(matrix[i][k + 1]);
          counter += checkMatrixItem(matrix[i + 1][k]);
        } else if (k === matrix[i].length - 1) {
          counter += checkMatrixItem(matrix[i][k - 1]);
          counter += checkMatrixItem(matrix[i + 1][k]);
        } else {
          counter += checkMatrixItem(matrix[i][k - 1]);
          counter += checkMatrixItem(matrix[i][k + 1]);
          counter += checkMatrixItem(matrix[i + 1][k]);
        }
      } else if (i === matrix.length - 1) {
        if (k === 0) {
          counter += checkMatrixItem(matrix[i][k + 1]);
          counter += checkMatrixItem(matrix[i - 1][k]);
        } else if (k === matrix[i].length - 1) {
          counter += checkMatrixItem(matrix[i][k - 1]);
          counter += checkMatrixItem(matrix[i - 1][k]);
        } else {
          counter += checkMatrixItem(matrix[i][k - 1]);
          counter += checkMatrixItem(matrix[i][k + 1]);
          counter += checkMatrixItem(matrix[i - 1][k]);
        }
      } else if (i !== 0 && i !== matrix.length - 1) {
        if (k === 0) {
          counter += checkMatrixItem(matrix[i + 1][k]);
          counter += checkMatrixItem(matrix[i - 1][k]);
          counter += checkMatrixItem(matrix[i][k + 1]);
        } else if (k === matrix[i].length - 1) {
          counter += checkMatrixItem(matrix[i + 1][k]);
          counter += checkMatrixItem(matrix[i - 1][k]);
          counter += checkMatrixItem(matrix[i][k - 1]);
        } else {
          counter += checkMatrixItem(matrix[i + 1][k]);
          counter += checkMatrixItem(matrix[i - 1][k]);
          counter += checkMatrixItem(matrix[i][k - 1]);
          counter += checkMatrixItem(matrix[i][k + 1]);
        }
      }
      res[i][k] = counter === 0 ? 1 : counter;
    }
  }
  return res;
}

module.exports = minesweeper;
