import Select from '../../React/components/Select'
import { render } from '../../helpers/render'
import { screen } from '@testing-library/react'

const handleChange = jest.fn()
const states = [
  {
    label: 'Alabama',
    value: 'AL',
  },
  {
    label: 'Alaska',
    value: 'AK',
  },
]

describe('Select', () => {
  test('Should render input', async () => {
    render(
      <Select
        direction={'row'}
        alignItems={'left'}
        forAndId={'state'}
        value={'AL'}
        onChange={handleChange}
        required={true}
        optionsList={states}
      />
    )
    expect(screen.getByTestId('state')).toBeTruthy()
  })
})
