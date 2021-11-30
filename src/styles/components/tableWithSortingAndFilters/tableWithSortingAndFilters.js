import styled from 'styled-components'
import colors from '../../bases/colors'

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`
export const NoData = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid ${colors.textLight};
  border-radius: 0.35rem;
  width: 100%;
  height: 2.5rem;
`