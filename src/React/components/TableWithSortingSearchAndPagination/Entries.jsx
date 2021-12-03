import React from 'react'
import {
  EntriesText,
  EntriesStyle,
} from '../../../styles/components/tableWithSortingAndFilters/entries'
import Select from '../Select'

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

export default Entries
