const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  try {
    const voc = {
	  '--discard-next': discardNext,
	  '--double-next': doubleNext,
      '--discard-prev': discardPrev,
	  '--double-prev': doublePrev
	}
	function doubleNext(array, controlIndex) {
	  if (controlIndex === array.length - 1) {
	    return array.filter((value, index) => index < array.length - 1);
	  }
	  return array.map((value, index, array) => {
        if (controlIndex === index) {
	    	return value = array[index + 1];
		} else {
		  return value;
		}
	  });
	} 
	function doublePrev(array, controlIndex) {
		if (controlIndex === 0) {
		  return array.filter((value, index) => index > 0);
		}
		return array.map((value, index, array) => {
		  if (controlIndex === index) {
			  if (!array[index - 1]) {
				delete value;
			  } else {
				return value = array[index - 1];
			  }
			  
		  } else {
			return value;
		  }
		});
	} 
	function discardNext(array, controlIndex) {
		if (controlIndex === array.length - 1) {
		  return array.filter((value, index) => index < array.length - 1);
		}
		const res = array.slice();
		delete res[controlIndex];
		delete res[controlIndex + 1];
		return res;
	} 
	function discardPrev(array, controlIndex) {
		if (controlIndex === 0) {
		  return array.filter((value, index) => index > 0);
		}
		const res = array.slice();
		res.splice(controlIndex - 1, 2);
		return res;
	} 
	let result = arr;
	for (let key in voc) {
		for (let i = 0; i < result.length; i++) {
		  if (key === result[i]) {
	        result = voc[key](result, i);
		  } 
		}
	}
	
	return result.filter(value => value);
  } catch (err) {
	throw new Error("'arr' parameter must be an instance of the Array!");
  }
}


module.exports = {
  transform
};
