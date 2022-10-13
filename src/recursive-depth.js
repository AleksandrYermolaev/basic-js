const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
//	throw new NotImplementedError('Not implemented');
	this.calculateDepth.depth = (this.calculateDepth.depth || 1);
	this.calculateDepth.maxDepth = (this.calculateDepth.maxDepth || 1);
	if (arr.length === 0) {
		if (this.calculateDepth.depth > this.calculateDepth.maxDepth) this.calculateDepth.maxDepth = this.calculateDepth.depth;
		this.calculateDepth.depth = 1;
		return;
	} else {
		arr.forEach(value => {
			if (Array.isArray(value)) {
				this.calculateDepth.depth += 1;
				this.calculateDepth(value);
			}
			if (this.calculateDepth.depth > this.calculateDepth.maxDepth) this.calculateDepth.maxDepth = this.calculateDepth.depth;
			this.calculateDepth.depth = 1;
			
		});
	const result = JSON.parse(JSON.stringify(this.calculateDepth.maxDepth));
	this.calculateDepth.maxDepth = 1;
	return result;
	}
 }
}

module.exports = {
  DepthCalculator
};
