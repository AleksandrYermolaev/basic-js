const { NotImplementedError } = require('../extensions/index.js');

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
	const arr = str.split('');
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i+1]) {
			if (res[res.length - 1] === 2) {
			  res = res.slice(0, res.length - 1);
			  res.push(3);
			} else if (res[res.length - 1] === 3) {
			  res = res.slice(0, res.length - 1);
			  res.push(4);
			} else {
				res.push(2);
			}
		} else {
			res.push(arr[i]);
		}
	}
	const result = res.join('');
	return result;
}
encodeLine('');
module.exports = {
  encodeLine
};
