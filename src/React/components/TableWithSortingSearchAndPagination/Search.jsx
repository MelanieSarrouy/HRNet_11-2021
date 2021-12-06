// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import { SearchDiv } from '../../../styles/components/tableWithSortingAndFilters/search'
// components imports
import Input from '../Input'

// JSX // _________________________________________________________________

/**
 * Search component to display a search field
 * @name Search
 * @param {object} props 
 * @returns {?JSX}
 */

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

// PROPTYPES // ___________________________________________________________

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

// EXPORT // ______________________________________________________________

export default Search
