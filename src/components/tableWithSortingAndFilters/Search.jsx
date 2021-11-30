import React from 'react'
import { SearchDiv } from '../../styles/components/tableWithSortingAndFilters/search'
import Input from '../Input'

const Search = ({ value, onChange }) => {
  return (
    <SearchDiv>
      <Input // Search
        direction={'row'}
        forAndId={'search:'}
        inputType={'search'}
        value={value}
        required={false}
        onChange={onChange}
      />
    </SearchDiv>
  )
}

export default Search
