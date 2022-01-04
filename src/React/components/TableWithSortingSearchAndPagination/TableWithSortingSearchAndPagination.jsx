// IMPORTS // ______________________________________________________________

import React, { useState } from 'react'
import PropTypes from 'prop-types'
// styles imports
import {
  FiltersWrapper,
  NoData,
} from '../../../styles/components/tableWithSortingAndFilters/tableWithSortingAndFilters'
// functions imports
import { standardizeAndLowerCase } from '../../../helpers/standardizeAndLowerCase'
// components imports
import Entries from './Entries'
import EntriesDisplayed from './EntriesDisplayed'
import Pagination from './Pagination'
import Search from './Search'
import Table from './Table'

// JSX // _________________________________________________________________

/**
 * TableWithSortingandFilters component to display table, select entries, search input, sorting and pagination
 * @name TableWithSortingandFilters
 * @param {object} props
 * @returns {?JSX}
 */

const TableWithSortingandFilters = (props) => {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [page, setPage] = useState(1)

  // array of employees list
  const listArr = Array.from(props.list)

  // employees list with values concatenated
  const listArrValues = listArr.map((el) => {
    const valuesWithoutId = { ...el }
    delete valuesWithoutId.id
    const values = Object.values(valuesWithoutId)
    const newValues = values.map((el) => standardizeAndLowerCase(el))
    const concat = newValues.join()
    return concat
  })

  // Correspondence's search result between the employees list and the entered search
  let listMatchSearch = []
  // if a search is entered
  for (let i = 0; i < listArrValues.length; i++) {
    if (listArrValues[i].includes(search)) {
      listMatchSearch.push(listArr[i])
    }
  }
  // if no search is entered
  if (search === '') {
    listMatchSearch = props.list
  }

  // number of entries to display
  const length = listMatchSearch.length
  const division = listMatchSearch.length / entries
  // the last data that can be displayed on the page
  const lastDataOnPage = page * entries
  // the first data that can be displayed on the page
  const firstDataOnPage = lastDataOnPage - entries
  // number of full pages
  const fullPages = Math.trunc(division)
  // number of pages
  const pageCount = Math.ceil(division)

  // array of number of pages
  let pageCountRange = []
  for (let i = 0; i < pageCount; i++) {
    pageCountRange.push(i)
  }

  // employees list to display on current page
  const listToDisplay = listMatchSearch.slice(firstDataOnPage, lastDataOnPage)

  // when a search is made
  const handleChangeSearch = (e) => {
    const value = standardizeAndLowerCase(e.target.value)
    setPage(1)
    setSearch(value)
  }
  // when number of entries to display is selected
  const handleChangeEntries = (e) => {
    setEntries(e.target.value)
    setPage(1)
  }

  return (
    <section>
      <FiltersWrapper>
        <Entries
          value={entries}
          onChange={handleChangeEntries}
          entriesNumber={props.entriesNumber}
        />
        <Search value={search} onChange={handleChangeSearch} />
      </FiltersWrapper>

      {length !== 0 ? (
        <Table
          listToDisplay={listToDisplay}
          list={props.list}
          keysToDisplay={props.keysToDisplay}
        />
      ) : (
        <NoData>Oops there isn't any data to display !</NoData>
      )}

      <FiltersWrapper>
        <EntriesDisplayed
          page={page}
          fullPages={fullPages}
          firstDataOnPage={firstDataOnPage}
          lastDataOnPage={lastDataOnPage}
          length={length}
        />

        <Pagination
          setPage={setPage}
          page={page}
          pageCount={pageCount}
          pageCountRange={pageCountRange}
        />
      </FiltersWrapper>
    </section>
  )
}

// PROPTYPES // ___________________________________________________________

TableWithSortingandFilters.propTypes = {
  list: PropTypes.array.isRequired,
  entriesNumber: PropTypes.array.isRequired,
  keysToDisplay: PropTypes.array.isRequired,
}

// EXPORT // ______________________________________________________________

export default TableWithSortingandFilters
