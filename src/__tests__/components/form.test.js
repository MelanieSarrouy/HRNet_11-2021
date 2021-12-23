import Form from '../../React/components/Form'
import { render } from '../../helpers/render'
import { screen, fireEvent } from '@testing-library/react'

const setup = (id) => {
  const utils = render(<Form />)
  const input = screen.getByTestId(id)
  return {
    input,
    ...utils,
  }
}

describe('Form', () => {
  test('Should display an error if input firstName is empty', async () => {
    const { input } = setup('first-name')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  test('Should display an error if input lastName is empty', async () => {
    const { input } = setup('last-name')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  test('Should display an error if input date of birth is empty', async () => {
    const { input } = setup('date-of-birth')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  test('Should display an error if input start date is empty', async () => {
    const { input } = setup('start-date')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  test('Should display an error if input street is empty', async () => {
    const { input } = setup('street')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  test('Should display an error if input city is empty', async () => {
    const { input } = setup('city')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
  })
  test('Should display an error if input zip code is empty', async () => {
    const { input } = setup('city')
    fireEvent.change(input, { target: { value: ' ' } })
    const save = screen.getByTestId('save')
    fireEvent.click(save)
    expect(screen.getByText('Please fill fields correctly')).toBeTruthy()
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
