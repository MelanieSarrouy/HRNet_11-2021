import { standardizeAndLowerCase } from '../../helpers/standardizeAndLowerCase'

it('Should standardize and lower case', () => {
  const string = 'Bâl.ädéÉ'
  expect(standardizeAndLowerCase(string)).toBe('baladee')
})
