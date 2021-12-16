import Header from '../../React/components/Header'
import { render } from '../../helpers/render'
import { screen } from '@testing-library/react'

describe('Header', () => {
  test('Should render header', async () => {
    render(<Header />)
    expect(screen.getByText('HRnet')).toBeTruthy()
  })
})
