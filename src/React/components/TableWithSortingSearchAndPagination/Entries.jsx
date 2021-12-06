// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import {
  EntriesText,
  EntriesStyle,
} from '../../../styles/components/tableWithSortingAndFilters/entries'
// components imports
import Select from '../Select'

// JSX // _________________________________________________________________

/**
 * Entries component to diplay a dropdown list to select how many rows to display on the table
 * @name Entries
 * @param {object} props 
 * @returns {?JSX}
 */

const Entries = (props) => {
  return (
    <EntriesStyle>
      <Select
        direction={'row'}
        alignItems={'center'}
        forAndId={'show'}
        value={props.value}
        onChange={props.onChange}
        optionsList={props.entriesNumber}
      />
      <EntriesText>entries</EntriesText>
    </EntriesStyle>
  )
}

// PROPTYPES // ___________________________________________________________

Entries.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),  
  onChange: PropTypes.func.isRequired,
  entriesNumber: PropTypes.array.isRequired
}

// EXPORT // ______________________________________________________________

export default Entries
