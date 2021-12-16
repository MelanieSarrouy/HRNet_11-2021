import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'

test('Should capitalize first letter', () => {
  const string = 'tEst-caPiTaliZe-firSt-leTter'
  expect(capitalizeFirstLetter(string)).toBe('Test Capitalize First Letter')
})
