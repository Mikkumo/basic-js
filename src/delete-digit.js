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
  let res = []
  let str = n.toString()
  let num = ''
  
  for (let i = 0; i < str.length; i++) {
    num = num.concat(str.substring(0, i)).concat(str.substring(i + 1))
    res.push(num)
    num = ''
  }
  res.sort((a, b) => a - b)
  
  return Number(res[res.length - 1])
}

module.exports = {
  deleteDigit
};
