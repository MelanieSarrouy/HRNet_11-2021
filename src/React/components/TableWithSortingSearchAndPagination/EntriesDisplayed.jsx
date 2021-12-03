import React from 'react'
import { Span } from '../../../styles/components/tableWithSortingAndFilters/entriesDisplayed'

const EntriesDisplayed = ({
  page,
  fullPages,
  firstDataOnPage,
  lastDataOnPage,
  length,
}) => {
  return (
    <div>
      {page > fullPages ? (
        <p>
          Showing <Span>{firstDataOnPage + 1}</Span> to <Span>{length}</Span> of{' '}
          <Span>{length}</Span> entries
        </p>
      ) : (
        <p>
          Showing <Span>{firstDataOnPage + 1}</Span> to{' '}
          <Span>{lastDataOnPage}</Span> of <Span>{length}</Span> entries
        </p>
      )}
    </div>
  )
}

export default EntriesDisplayed
