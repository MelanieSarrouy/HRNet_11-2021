import React from 'react'
import {
  EntriesText,
  EntriesStyle,
} from '../../../styles/components/tableWithSortingAndFilters/entries'
import Select from '../Select'

const Entries = ({ value, onChange, entriesNumber }) => {
  return (
    <EntriesStyle>
      <Select
        direction={'row'}
        alignItems={'center'}
        forAndId={'show'}
        value={value}
        onChange={onChange}
        optionsList={entriesNumber}
      />
      <EntriesText>entries</EntriesText>
    </EntriesStyle>
  )
}

export default Entries
