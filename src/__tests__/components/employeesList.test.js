import EmployeesList from '../../React/pages/EmployeesList'
import { render } from '../../helpers/render'
import { screen } from '@testing-library/react'

describe('EmployeesList', () => {
  test('Should render Employees List page', async () => {
    render(<EmployeesList />)
    const h2 = screen.getByText('Current employees')
    expect(h2).toBeTruthy()
  })
})
