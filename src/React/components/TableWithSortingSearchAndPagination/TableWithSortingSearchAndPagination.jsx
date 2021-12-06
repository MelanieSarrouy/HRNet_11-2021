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

  const listArr = Array.from(props.list)

  const listArrValues = listArr.map((el) => {
    const valuesWithoutId = { ...el }
    delete valuesWithoutId.id
    const values = Object.values(valuesWithoutId)
    const newValues = values.map((el) => standardizeAndLowerCase(el))
    const concat = newValues.join()
    return concat
  })

  let listMatchSearch = []

  for (let i = 0; i < listArrValues.length; i++) {
    if (listArrValues[i].includes(search)) {
      listMatchSearch.push(listArr[i])
    }
  }

  if (search === '') {
    listMatchSearch = props.list
  }

  const length = listMatchSearch.length
  const division = listMatchSearch.length / entries
  const lastDataOnPage = page * entries
  const firstDataOnPage = lastDataOnPage - entries
  const fullPages = Math.trunc(division)
  const pageCount = Math.ceil(division)

  let pageCountRange = []
  for (let i = 0; i < pageCount; i++) {
    pageCountRange.push(i)
  }

  const listToDisplay = listMatchSearch.slice(firstDataOnPage, lastDataOnPage)
  const handleChangeSearch = (e) => {
    const value = standardizeAndLowerCase(e.target.value)
    setPage(1)
    setSearch(value)
  }
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
