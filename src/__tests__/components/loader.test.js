import Loader from '../../React/components/Loader'
import { render } from '../../helpers/render'
import { screen } from '@testing-library/react'

describe('Loader', () => {
  test('Should render loader', async () => {
    render(<Loader />)
    expect(screen.getByTestId('loader')).toBeTruthy()
  })
})
