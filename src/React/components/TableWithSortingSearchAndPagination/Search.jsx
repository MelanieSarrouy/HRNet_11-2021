import React from 'react'
import { SearchDiv } from '../../../styles/components/tableWithSortingAndFilters/search'
import Input from '../Input'

const Search = (props) => {
  return (
    <SearchDiv>
      <Input // Search
        direction={'row'}
        forAndId={'search:'}
        inputType={'search'}
        value={props.value}
        required={false}
        onChange={props.onChange}
      />
    </SearchDiv>
  )
}

export default Search
