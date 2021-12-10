import Input from '../React/components/Input'
import { render } from '../helpers/render'
import { screen } from '@testing-library/react'

const handleChange = jest.fn()

describe('Input', () => {
  test('Should render input', async () => {
    render(
      <Input
        direction={'row'}
        forAndId={'first-name'}
        inputType={'text'}
        value={'Test'}
        onChange={handleChange}
        required={true}
      />
    )
    expect(screen.getByDisplayValue('Test')).toBeTruthy()
  })
})