import React from 'react'
import colors from '../../styles/bases/colors'
import {
  DivPagination,
  ButtonNumber,
  ButtonText,
  TextNoButton,
} from '../../styles/components/table/pagination'

const Pagination = ({ setPage, page, pageCount, pageCountRange }) => {

  return (
    <DivPagination>
      {page === 1 ? (
        <TextNoButton>Previous</TextNoButton>
      ) : (
        <ButtonText
          onClick={() => {
            setPage(page - 1)
          }}
        >
          Previous
        </ButtonText>
      )}

      {pageCountRange.map((index) => {
        if ((page === pageCountRange[index + 1]) || (page -1  === pageCountRange[index])) {
          return (
            <ButtonNumber
              backgroundColor={colors.primary}
              color="white"
              key={index + 1}
              onClick={(e) => {
                setPage(index + 1)
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
                setPage(index + 1)
              }}
            >
              {index + 1}
            </ButtonNumber>
          )
        }
      })}

      {page === pageCount ? (
        <TextNoButton>Next</TextNoButton>
      ) : (
        <ButtonText
          onClick={(e) => {
            setPage(page + 1)
          }}
        >
          Next
        </ButtonText>
      )}
    </DivPagination>
  )
}

export default Pagination
