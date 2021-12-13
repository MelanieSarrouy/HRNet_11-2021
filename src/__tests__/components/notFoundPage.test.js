import NotFoundPage from '../../React/pages/NotFoundPage'
import { render } from '../../helpers/render'
import { screen } from '@testing-library/react'

describe('NotFoundPage', () => {
  it('Should render NotFoundPage', async () => {
    render(<NotFoundPage />)
    screen.debug()
    expect(screen.getByText('Sorry, page not found')).toBeTruthy()
  })
})
