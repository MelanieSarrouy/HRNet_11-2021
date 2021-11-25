import React from 'react'
import {
  EntriesText,
  EntriesStyle,
} from '../../styles/components/table/entries'
import Select from '../Select'
import entriesQuantity from  '../../datas/entriesQuantity'

const Entries = ({ value, onChange }) => {
  return (
    <EntriesStyle>
      <Select
        direction={'row'}
        alignItems={'center'}
        forAndId={'show'}
        value={value}
        onChange={onChange}
        optionsList={entriesQuantity}
      />
      <EntriesText>entries</EntriesText>
    </EntriesStyle>
  )
}

export default Entries
