/**
 * standardizeAndLowerCase is a function to standardize and lower case a string
 * @function
 * @name standardizeAndLowerCase
 * @param {string} str 
 * @returns {string}
 */

export const standardizeAndLowerCase = (str) => {
  let a = str
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[œ]/g, 'oe')
    .replace(/[ÈÉÊËèéêë]/g, 'e')
    .toLowerCase()
    .replace('.', '')
    .replace(' ', '')
  return a
}
