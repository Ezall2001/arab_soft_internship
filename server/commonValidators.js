/** @format */

const lettersOnly = str => !/[^A-Za-z ]/.test(str)
const numericOnly = str => !/[^0-9]/.test(str)
const alphaNumeric = str => !/[^A-Za-z0-9 ]/.test(str)
const minLength = num => str => str.length >= num

module.exports = {lettersOnly, numericOnly, alphaNumeric, minLength}
