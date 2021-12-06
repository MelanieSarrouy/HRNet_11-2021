// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import colors from '../../../styles/bases/colors'
import {
  DivPagination,
  ButtonNumber,
  ButtonText,
  TextNoButton,
} from '../../../styles/components/tableWithSortingAndFilters/pagination'

// JSX // _________________________________________________________________

/**
 * Pagination component to display the number of pages
 * @name Pagination
 * @param {object} props 
 * @returns {?JSX}
 */

const Pagination = (props) => {
  return (
    <DivPagination>
      {props.page === 1 ? (
        <TextNoButton>Previous</TextNoButton>
      ) : (
        <ButtonText
          onClick={() => {
            props.setPage(props.page - 1)
          }}
        >
          Previous
        </ButtonText>
      )}

      {props.pageCountRange.map((index) => {
        if (
          props.page === props.pageCountRange[index + 1] ||
          props.page - 1 === props.pageCountRange[index]
        ) {
          return (
            <ButtonNumber
              backgroundColor={colors.primary}
              color="white"
              key={index + 1}
              onClick={(e) => {
                props.setPage(index + 1)
              }}
            >
              {index + 1}
            </ButtonNumber>
          )
        } else {
          return (
            <ButtonNumber
              backgroundColor={colors.background}
              color={colors.text}
              key={index + 1}
              onClick={(e) => {
                props.setPage(index + 1)
              }}
            >
              {index + 1}
            </ButtonNumber>
          )
        }
      })}

      {props.page === props.pageCount ? (
        <TextNoButton>Next</TextNoButton>
      ) : (
        <ButtonText
          onClick={(e) => {
            props.setPage(props.page + 1)
          }}
        >
          Next
        </ButtonText>
      )}
    </DivPagination>
  )
}

// PROPTYPES // ___________________________________________________________

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  pageCountRange: PropTypes.array.isRequired,
  pageCount: PropTypes.number.isRequired
}

// EXPORT // ______________________________________________________________

export default Pagination
