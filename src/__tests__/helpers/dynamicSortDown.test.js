import { dynamicSortDown } from '../../helpers/dynamicSortDown'

const data = [
  { name: 'Aa', birthDate: '2001-01-01' },
  { name: 'Bb', birthDate: '2002-02-02' },
  { name: 'Cc', birthDate: '2003-03-03' },
]
const result = [
  { name: 'Cc', birthDate: '2003-03-03' },
  { name: 'Bb', birthDate: '2002-02-02' },
  { name: 'Aa', birthDate: '2001-01-01' },
]

describe('dynamicSortDown', () => {
  test('Should sort down array with date property', () => {
    expect([...data].sort(dynamicSortDown('birthDate'))).toStrictEqual(result)
  })
  test('Should sort down array with string property', () => {
    expect([...data].sort(dynamicSortDown('name'))).toStrictEqual(result)
  })
})
