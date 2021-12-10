import EmployeesList from '../React/pages/EmployeesList'
import { render } from '../helpers/render'

describe('EmployeesList', () => {
  test('Should render without crashing', async () => {
    render(<EmployeesList />)
  })
})