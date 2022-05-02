const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr = s1.concat(s2).split('').sort()
  let res = 0
  let minLength = 0

  s1.length < s2.length ? minLength = s1.length : minLength = s2.length

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      res++
      i++
    }
    if (res === minLength) {
      break
    }
  }
  return res
}
 
module.exports = {
  getCommonCharacterCount
};
