/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];
  for (let i = 0; i < names.length; i++) {
    if (res.indexOf(names[i]) !== -1) {
      const slicedNames = names.slice(0, i);
      const countRes = res.filter((item) => item === names[i]).length;
      const countNames = slicedNames.filter((item) => item === names[i]).length;
      res.push(`${names[i]}(${Math.max(countRes, countNames)})`);
    } else {
      res.push(names[i]);
    }
  }
  return res;
}

module.exports = renameFiles;
