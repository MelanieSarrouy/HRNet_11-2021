import Homepage from '../../React/pages/Homepage'
import { render } from '../../helpers/render'
import { screen, fireEvent, waitFor } from '@testing-library/react'

const setupModal = () => {
  const utils = render(<Homepage />)
  const firstName = screen.getByTestId('first-name')
  const lastName = screen.getByTestId('last-name')
  const dateOfBirth = screen.getByTestId('date-of-birth')
  const startDate = screen.getByTestId('start-date')
  const street = screen.getByTestId('street')
  const city = screen.getByTestId('city')
  const zipCode = screen.getByTestId('zip-code')
  const save = screen.getByTestId('save')
  fireEvent.change(firstName, { target: { value: 'Bob' } })
  fireEvent.change(lastName, { target: { value: 'Leponge' } })
  fireEvent.change(dateOfBirth, { target: { value: '1982-08-28' } })
  fireEvent.change(startDate, { target: { value: '2021-12-10' } })
  fireEvent.change(street, { target: { value: '221B Baker street' } })
  fireEvent.change(city, { target: { value: 'London' } })
  fireEvent.change(zipCode, { target: { value: 45856 } })

  fireEvent.click(save)

  return {
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    street,
    city,
    zipCode,
    save,
    ...utils,
  }
}

describe('Homepage', () => {
  test('Should render homepage', async () => {
    render(<Homepage />)
    const h2 = screen.getByText('Create employee')
    expect(h2).toBeTruthy()
  })
})

describe('Modal', () => {
  test('should open modal', async () => {
    setupModal()
    expect(screen.getByText('New employee created !')).toBeTruthy()
  })
  test('Should close modal on click', async () => {
    setupModal()
    const img = screen.getByAltText('close')
    fireEvent.click(img)
    await waitFor(() => expect(img).not.toBeInTheDocument())
  })
  test('should close modal on Escape key up', async () => {
    setupModal()
    const img = screen.getByAltText('close')
    fireEvent.keyUp(document, { key: 'Escape' })
    await waitFor(() => expect(img).not.toBeInTheDocument())
  })
})
