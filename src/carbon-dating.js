const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(activity) {
  console.log(activity);
  if (typeof(activity) !== 'string') return false;
  const activityNumber = +activity;
  console.log(activityNumber);
  if (isNaN(activityNumber) || activityNumber <= 0) return false;
  if (activityNumber >= 15) return false;
  const lambda = 0.693 / HALF_LIFE_PERIOD;
  const activityPercent = activityNumber / MODERN_ACTIVITY;
  console.log(activityPercent);
  const result = Math.ceil(- (Math.log(activityPercent) / lambda));
  console.log(result);
  return result;
}
dateSample('3');
module.exports = {
  dateSample
};
