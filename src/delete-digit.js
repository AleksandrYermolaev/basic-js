const { NotImplementedError } = require('../extensions/index.js');

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
  const arr = n.toString().split('');
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
	const current = +arr.slice(0, i).concat(arr.slice(i + 1)).join('');
	if (current > max) max = current;
  }
  return max;
}
deleteDigit(152);
module.exports = {
  deleteDigit
};
