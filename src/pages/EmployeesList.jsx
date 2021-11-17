import React, { useState } from 'react'
import Input from '../components/Input'
import Table from '../components/Table'
import { InputLabel } from '../styles/components/input'
import { Entries, EntriesText, FiltersWrapper, Search } from '../styles/pages/emplyeesList'
import { SelectStyle } from '../styles/pages/homepage'

const EmployeesList = () => {
  const [search, setSearch] = useState('')
  return (
    <>
      <h2 className="sr-only">Current employees</h2>
      <FiltersWrapper>
        <Entries>
          {/* <p>Show</p> */}
          <InputLabel htmlFor="entries">Show</InputLabel>
          <SelectStyle name="entries" id="entries">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </SelectStyle>
          <EntriesText> entries</EntriesText>
        </Entries>
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
      <Table />

    </>
  )
}

export default EmployeesList
