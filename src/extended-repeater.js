const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionStr;
  let mainStr;
  const repeatTimes = (options.repeatTimes || 1);
  const separator = (options.separator === undefined ? '+' : '' + options.separator);
  const addition = (options.addition === undefined ? undefined : '' + options.addition);
  const additionRepeatTimes = (options.additionRepeatTimes || 1);
  const additionSeparator = (options.additionSeparator || '|');
  if (addition) {
	additionStr = ('' + addition + additionSeparator).repeat(additionRepeatTimes).slice(0, - additionSeparator.length);
	mainStr = ('' + str + additionStr + separator).repeat(repeatTimes).slice(0, - separator.length);
  } else {
	mainStr = ('' + str + separator).repeat(repeatTimes).slice(0, - separator.length);
  }
  return mainStr;
}


module.exports = {
  repeater
};
