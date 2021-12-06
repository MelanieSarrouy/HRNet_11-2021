// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import { Span } from '../../../styles/components/tableWithSortingAndFilters/entriesDisplayed'

// JSX // _________________________________________________________________

/**
 * EntriesDisplayed component to display the number of displayed data out of the total number of data.
 * @name EntriesDisplayed
 * @param {object} props
 * @returns {?JSX}
 */

const EntriesDisplayed = (props) => {
  return (
    <div>
      {props.page > props.fullPages ? (
        <p>
          Showing <Span>{props.firstDataOnPage + 1}</Span> to <Span>{props.length}</Span> of{' '}
          <Span>{props.length}</Span> entries
        </p>
      ) : (
        <p>
          Showing <Span>{props.firstDataOnPage + 1}</Span> to{' '}
          <Span>{props.lastDataOnPage}</Span> of <Span>{props.length}</Span> entries
        </p>
      )}
    </div>
  )
}

// PROPTYPES // ___________________________________________________________

EntriesDisplayed.propTypes = {
  page: PropTypes.number.isRequired,
  fullPages: PropTypes.number.isRequired,
  firstDataOnPage: PropTypes.number.isRequired,
  lastDataOnPage: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
}

// EXPORT // ______________________________________________________________

export default EntriesDisplayed
