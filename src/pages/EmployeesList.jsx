import React, { useState } from 'react'
import Input from '../components/Input'
import Table from '../components/Table'
import { InputLabel } from '../styles/components/input'
import {
  Entries,
  EntriesText,
  FiltersWrapper,
  Search,
  Button
} from '../styles/pages/emplyeesList'
import { SelectStyle } from '../styles/pages/homepage'

const EmployeesList = () => {
  const [search, setSearch] = useState('')
  return (
    <>
      <h2 className="sr-only">Current employees</h2>
      <section>
        <FiltersWrapper>
          <Entries>
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
        <FiltersWrapper>
          <p>Showing 1 to 10 of 11 entries</p>
          <div>
            <span>Previous</span>
            <Button>1</Button>
            <Button>2</Button>
            <span>Next</span>
          </div>
        </FiltersWrapper>
      </section>
    </>
  )
}

export default EmployeesList
