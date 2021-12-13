import Homepage from '../../React/pages/Homepage'
import { render } from '../../helpers/render'
import { screen, fireEvent, waitFor } from '@testing-library/react'

const setup = (id) => {
  const utils = render(<Homepage />)
  const input = screen.getByTestId(id)
  return {
    input,
    ...utils,
  }
}
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
  it('Should render homepage', async () => {
    render(<Homepage />)
    expect(screen.getByText('Create employee')).toBeTruthy()
  })
  it('Should display an error if input firstName is empty', async () => {
    const { input } = setup('first-name')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  it('Should display an error if input lastName is empty', async () => {
    const { input } = setup('last-name')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  it('Should display an error if input date of birth is empty', async () => {
    const { input } = setup('date-of-birth')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  it('Should display an error if input start date is empty', async () => {
    const { input } = setup('start-date')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  it('Should display an error if input street is empty', async () => {
    const { input } = setup('street')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  it('Should display an error if input city is empty', async () => {
    const { input } = setup('city')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  it('Should display an error if input zip code is empty', async () => {
    const { input } = setup('city')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })

  it('Should change firstName input value', async () => {
    const { input } = setup('first-name')
    fireEvent.change(input, { target: { value: 'Bob' } })
    expect(input.value).toBe('Bob')
  })
  it('Should change lastName input value', async () => {
    const { input } = setup('last-name')
    fireEvent.change(input, { target: { value: 'Leponge' } })
    expect(input.value).toBe('Leponge')
  })
  it('Should change birth date input value', async () => {
    const { input } = setup('date-of-birth')
    fireEvent.change(input, { target: { value: '1982-08-28' } })
    expect(input.value).toBe('1982-08-28')
  })
  it('Should change start date input value', async () => {
    const { input } = setup('start-date')
    fireEvent.change(input, { target: { value: '2021-12-10' } })
    expect(input.value).toBe('2021-12-10')
  })
  it('Should change street input value', async () => {
    const { input } = setup('street')
    fireEvent.change(input, { target: { value: '221B Baker street' } })
    expect(input.value).toBe('221B Baker street')
  })
  it('Should change city input value', async () => {
    const { input } = setup('city')
    fireEvent.change(input, { target: { value: 'London' } })
    expect(input.value).toBe('London')
  })
  it('Should change zip code input value', async () => {
    const { input } = setup('zip-code')
    fireEvent.change(input, { target: { value: 45856 } })
    expect(input.value).toBe('45856')
  })
  it('Should change state select value', async () => {
    const { input } = setup('state')
    fireEvent.change(input, { target: { value: 'Alabama' } })
    expect(input.value).toBe('AL')
  })
  it('Should change department select value', async () => {
    const { input } = setup('department')
    fireEvent.change(input, { target: { value: 'Sales' } })
    expect(input.value).toBe('Sales')
  })
})

describe('Modal', () => {
  it('should open modal', async () => {
    setupModal()
    expect(screen.getByText('New employee created !')).toBeTruthy()
  })
  it('Should close modal on click', async () => {
    setupModal()
    const img = screen.getByAltText('close')
    fireEvent.click(img)
    await waitFor(() => expect(img).not.toBeInTheDocument())
  })
  it('should close modal on Escape key up', async () => {
    setupModal()
    const img = screen.getByAltText('close')
    fireEvent.keyUp(document, { key: 'Escape' })
    await waitFor(() => expect(img).not.toBeInTheDocument())
  })
})
