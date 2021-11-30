import React from 'react'
import { useSelector } from 'react-redux'
import TableWithSortingandFilters from '../components/tableWithSortingAndFilters/TableWithSortingandFilters'
import entriesQuantity from '../../datas/entriesQuantity'
import keys from '../../datas/keys'

const EmployeesList = () => {

  let data
  data = useSelector((state) => state.getEmployees.employees)
  let entries
  entries = entriesQuantity
  let keysToDisplay
  keysToDisplay = keys

  return (
    <>
      <h2 className="sr-only">Current employees</h2>
      <TableWithSortingandFilters list={data} entriesNumber={entries} keysToDisplay={keysToDisplay} />
    </>
  )
}

export default EmployeesList
