import Homepage from '../React/pages/Homepage'
import { render } from '../helpers/render'
import { screen, fireEvent, waitFor } from '@testing-library/react'

const setup = (id) => {
  const utils = render(<Homepage />)
  const input = screen.getByTestId(id)
  return {
    input,
    ...utils,
  }
}

describe('Homepage', () => {
  test('Should render homepage', async () => {
    render(<Homepage />)
    expect(screen.getByText('Create employee')).toBeTruthy()
  })
  test('Should change firstName input value', async () => {
    const { input } = setup('first-name')
    fireEvent.change(input, { target: { value: 'Bob' } })
    expect(input.value).toBe('Bob')
  })
  test('Should change lastName input value', async () => {
    const { input } = setup('last-name')
    fireEvent.change(input, { target: { value: 'Leponge' } })
    expect(input.value).toBe('Leponge')
  })
  test('Should change birth date input value', async () => {
    const { input } = setup('date-of-birth')
    fireEvent.change(input, { target: { value: '1982-08-28' } })
    expect(input.value).toBe('1982-08-28')
  })
  test('Should change start date input value', async () => {
    const { input } = setup('start-date')
    fireEvent.change(input, { target: { value: '2021-12-10' } })
    expect(input.value).toBe('2021-12-10')
  })
  test('Should change street input value', async () => {
    const { input } = setup('street')
    fireEvent.change(input, { target: { value: '221B Baker street' } })
    expect(input.value).toBe('221B Baker street')
  })
  test('Should change city input value', async () => {
    const { input } = setup('city')
    fireEvent.change(input, { target: { value: 'London' } })
    expect(input.value).toBe('London')
  })
  test('Should change zip code input value', async () => {
    const { input } = setup('zip-code')
    fireEvent.change(input, { target: { value: 45856 } })
    expect(input.value).toBe('45856')
  })
  test('Should change state select value', async () => {
    const { input } = setup('state')
    fireEvent.change(input, { target: { value: 'Alabama' } })
    expect(input.value).toBe('AL')
  })
  test('Should change department select value', async () => {
    const { input } = setup('department')
    fireEvent.change(input, { target: { value: 'Sales' } })
    expect(input.value).toBe('Sales')
  })
})

describe('Modal', () => {
  test('should open modal', async () => {
    const { input } = setup('save')
    fireEvent.click(input)
    expect(screen.getByText('New employee created !')).toBeTruthy()
  })
  test('Should close modal on click', async () => {
    const { input } = setup('save')
    fireEvent.click(input)
    const img = screen.getByAltText('close')
    fireEvent.click(img)
    await waitFor(() => expect(img).not.toBeInTheDocument())
  })
  test('should close modal on Escape key up', async () => {
    const { input } = setup('save')
    fireEvent.click(input)
    const img = screen.getByAltText('close')
    fireEvent.keyUp(document, { key: 'Escape' })
    await waitFor(() => expect(img).not.toBeInTheDocument())
  })
})
