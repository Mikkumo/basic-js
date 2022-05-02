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
 * => 'STRING PLUS 00 PLUS 00 PLUS ** STRING PLUS 00 PLUS 00 PLUS ** STRING PLUS 00 PLUS 00 PLUS'
 *
 */
function repeater(str, options) {
  if (options.separator === undefined) options.separator = '+'
  if (options.additionSeparator === undefined) options.additionSeparator = '|'
  if (options.repeatTimes === undefined) options.repeatTimes = 1
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1
  
  let res = '' 
  let resAdditional = ''

  if (options.addition !== undefined) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      resAdditional += `${options.addition}${options.additionSeparator}`
    }
    resAdditional += `${options.addition}`
  }

  if (str !== undefined) {
    for (let i = 1; i < options.repeatTimes; i++) {
      res += `${str}${resAdditional}${options.separator}`
    }
    res += `${str}${resAdditional}`
  }

  return res
}

module.exports = {
  repeater
};
