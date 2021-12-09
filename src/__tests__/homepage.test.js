import Homepage from '../React/pages/Homepage'
import { render } from '../helpers/render'
import { screen, fireEvent } from '@testing-library/react'

describe('Homepage', () => {
  test('Should render homepage', async () => {
    render(<Homepage />)
    expect(screen.getByText('Create employee')).toBeTruthy()
  })
})

describe('Modal', () => {
  test('should open modal', async () => {
    render(<Homepage />)
    const submit = screen.getByTestId('save')
    fireEvent.click(submit)
    expect(screen.getByText('New employee created !')).toBeTruthy()
  })
})