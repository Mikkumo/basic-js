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
  let arr = str.split('')
  let res = []
  let num = 1
  arr.forEach((word, i) => {
    if (word === arr[i + 1]) {
      num++
    } else if (num > 1) {
      res.push(num, word)
      num = 1
    } else {
      res.push(word)
    }
  })

  return res.join('')
}

module.exports = {
  encodeLine
};
