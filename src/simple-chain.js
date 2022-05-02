const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position-1 > this.chain.length || position-1 < 0) {
      this.chain = []
      throw new Error("You can\'t remove incorrect link!")
    } 
    this.chain.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let str = ''
      this.chain.forEach((elem) => {
          if (str === '') {
              str = str + "( " + elem + " )"
          } else {
              str = str + "~~( " + elem + " )"
          }
      })
      this.chain = []
    return str
  }
};  

module.exports = {
  chainMaker
};
