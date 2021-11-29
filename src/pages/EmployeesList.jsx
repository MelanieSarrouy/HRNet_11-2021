import React, { useState } from 'react'
// import Input from '../components/Input'
import Table from '../components/table/Table'
import { FiltersWrapper } from '../styles/pages/emplyeesList'
import { useSelector } from 'react-redux'
import Entries from '../components/table/Entries'
import EntriesDisplayed from '../components/table/EntriesDisplayed'
import Pagination from '../components/table/Pagination'
import Search from '../components/table/Search'

const EmployeesList = () => {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [page, setPage] = useState(1)

  const employees = useSelector((state) => state.getEmployees.employees)

  function standardizeAndLowerCase(str) {
    let a = str
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[œ]/g, 'oe')
      .replace(/[ÈÉÊËèéêë]/g, 'e')
      .toLowerCase()
      .replace('.', '')
      .replace(' ', '')
    return a
  }

  const employeesArr = Array.from(employees)

  const employeesArrValues = employeesArr.map((el) => {
    const values = Object.values(el)
    values.pop()
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
    employeesMatchSearch = employees
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
          <Search value={search} onChange={handleChangeSearch} />
        </FiltersWrapper>

        {length !== 0 ? (
          <Table employees={employeesToDisplay} />
        ) : (
          <Table
            employees={[
              {
                city: '',
                dateOfBirth: '',
                department: '',
                firstName: 'Oops there isn\'t any employee to display !',
                id: '',
                lastName: '',
                startDate: '',
                state: '',
                street: '',
                zipCode: '',
              },
            ]}
          />
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
    </>
  )
}

export default EmployeesList
