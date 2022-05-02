const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {}

  for (let i = 0; i < domains.length; i++) {
    domains[i].split('.').reduceRight((sum, el) => {
			sum = sum + '.' + el
			if (res[sum]) {
        res[sum]++
      } else {
        res[sum] = 1
      }

			return sum
		}, '')
  }

  return res
}

module.exports = {
  getDNSStats
};
