import React, { useState } from 'react';
import { standardizeAndLowerCase } from '../../../helpers/standardizeAndLowerCase';
import { FiltersWrapper, NoData } from '../../../styles/components/tableWithSortingAndFilters/tableWithSortingAndFilters';
import Entries from './Entries';
import EntriesDisplayed from './EntriesDisplayed';
import Pagination from './Pagination';
import Search from './Search';
import Table from './Table';

const TableWithSortingandFilters = ({ list, entriesNumber, keysToDisplay}) => {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [page, setPage] = useState(1)

  const employeesArr = Array.from(list)

  const employeesArrValues = employeesArr.map((el) => {
    const valuesWithoutId = {...el} 
    delete valuesWithoutId.id
    const values = Object.values(valuesWithoutId)
    const newValues = values.map((el) => standardizeAndLowerCase(el))
    const concat = newValues.join()
    return concat
  })

  let employeesMatchSearch = []

  for (let i = 0; i < employeesArrValues.length; i++) {
    if (employeesArrValues[i].includes(search)) {
      employeesMatchSearch.push(employeesArr[i])
    }
  }

  if (search === '') {
    employeesMatchSearch = list
  }

  const length = employeesMatchSearch.length
  const division = employeesMatchSearch.length / entries
  const lastDataOnPage = page * entries
  const firstDataOnPage = lastDataOnPage - entries
  const fullPages = Math.trunc(division)
  const pageCount = Math.ceil(division)

  let pageCountRange = []
  for (let i = 0; i < pageCount; i++) {
    pageCountRange.push(i)
  }

  const employeesToDisplay = employeesMatchSearch.slice(
    firstDataOnPage,
    lastDataOnPage
  )
  const handleChangeSearch = (e) => {
    const value = standardizeAndLowerCase(e.target.value)
    setSearch(value)
  }
  const handleChangeEntries = (e) => {
    setEntries(e.target.value)
    setPage(1)
  }

  return (
    <section>
    <FiltersWrapper>
      <Entries value={entries} onChange={handleChangeEntries} entriesNumber={entriesNumber} />
      <Search value={search} onChange={handleChangeSearch} />
    </FiltersWrapper>

    {length !== 0 ? (
      <Table employeesToDisplay={employeesToDisplay} list={list} keysToDisplay={keysToDisplay}/>
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
);
};

export default TableWithSortingandFilters;