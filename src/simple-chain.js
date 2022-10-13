const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
	return this;
  },
  removeLink(position) {
	try {
	  if (position <= 0 || 
		  position > this.chain.length || 
		  !Number.isInteger(position)) throw err;
	  this.chain.splice(position - 1, 1);
	  return this;
	} catch(err) {
		this.chain = [];
		throw new Error('You can\'t remove incorrect link!');
	}
  },
  reverseChain() {
    this.chain.reverse();
	return this;
  },
  finishChain() {
	let result = '( ';
    this.chain.forEach(value => {
		result += value + ' )~~( ';
	});
	this.chain = [];
	return result.slice(0, -4);
  }
};

module.exports = {
  chainMaker
};
