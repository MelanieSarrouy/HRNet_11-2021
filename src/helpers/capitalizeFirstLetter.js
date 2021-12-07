/**
 * Function capitalizeFirstLetter to capitalize label's first letter
 * @function
 * @name capitalizeFirstLetter
 * @param {string} string 
 * @returns {string}
 */

export const capitalizeFirstLetter = (string) => {
  const regex = /-/gi 
  const newString = string.replace(regex, ' ')
  return newString
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.substr(1)
    })
    .join(' ')
}
