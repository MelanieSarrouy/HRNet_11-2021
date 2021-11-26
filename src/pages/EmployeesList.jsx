import React, { useState } from 'react'
import Input from '../components/Input'
import Table from '../components/table/Table'
import { FiltersWrapper, Search } from '../styles/pages/emplyeesList'
import { useSelector } from 'react-redux'
import Entries from '../components/table/Entries'
import EntriesDisplayed from '../components/table/EntriesDisplayed'
import Pagination from '../components/table/Pagination'

const EmployeesList = () => {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [page, setPage] = useState(1)

  const employees = useSelector((state) => state.getEmployees.employees)
  const length = employees.length

  const division = employees.length / entries
  const lastDataOnPage = page * entries
  const firstDataOnPage = lastDataOnPage - entries
  const fullPages = Math.trunc(division)
  const pageCount = Math.ceil(division)
  let pageCountRange = []
  for (let i = 0; i < pageCount; i++) {
    pageCountRange.push(i)
  }

  const employeesToDisplay = employees.slice(firstDataOnPage, lastDataOnPage)
  const handleChange = (e) => {
    setEntries(e.target.value)
    setPage(1)
  }
  return (
    <>
      <h2 className="sr-only">Current employees</h2>
      <section>
        <FiltersWrapper>
          <Entries value={entries} onChange={handleChange} />
          <Search>
            <Input // Search
              direction={'row'}
              forAndId={'search:'}
              inputType={'search'}
              value={search}
              required={false}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
          </Search>
        </FiltersWrapper>

        {length > 0 && <Table employees={employeesToDisplay} />}

        <FiltersWrapper>

          <EntriesDisplayed
            page={page}
            fullPages={fullPages}
            firstDataOnPage={firstDataOnPage}
            lastDataOnPage={lastDataOnPage}
            length={length}
          />

          <Pagination setPage={setPage} page={page} pageCount={pageCount} pageCountRange={pageCountRange} />
        
        </FiltersWrapper>
      </section>
    </>
  )
}

export default EmployeesList
