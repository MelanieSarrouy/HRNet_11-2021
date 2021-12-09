// IMPORTS // ______________________________________________________________

import React from 'react'
import { useSelector } from 'react-redux'
// components imports
import TableWithSortingSearchAndPagination from '../components/TableWithSortingSearchAndPagination/TableWithSortingSearchAndPagination'
// datas imports
import entriesQuantity from '../../datas/entriesQuantity'
import keys from '../../datas/keys'
import Loader from '../components/Loader'

// JSX // _________________________________________________________________

/**
 * EmployeesList component to display website's employees-list page
 * @name EmployeesList
 * @returns {?JSX}
 */

const EmployeesList = () => {
  let data, entries, keysToDisplay

  data = useSelector((state) => state.getEmployees.employees)
  entries = entriesQuantity
  keysToDisplay = keys

  const isLoading = useSelector((state) => state.getEmployees.isLoading)

  return (
    <>
      <h2 className="sr-only">Current employees</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <TableWithSortingSearchAndPagination
          list={data}
          entriesNumber={entries}
          keysToDisplay={keysToDisplay}
        />
      )}
    </>
  )
}

// EXPORT // ______________________________________________________________

export default EmployeesList
