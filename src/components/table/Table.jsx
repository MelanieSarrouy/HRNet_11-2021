import React from 'react'
import {
  TableContainer,
  TableStyle,
  TBodyContainer,
  TBody,
  ThDiv,
  TrHead,
} from '../../styles/components/table/table'
import Sorts from './Sorts'
import keys from '../../datas/keys'


const Table = ({ employees }) => {
  return (
    <TableContainer>
      <TableStyle>
        <thead>
          <TrHead>
            {keys.map((element, index) => {
              return (
                <th key={index}>
                  <ThDiv>
                    <p>{element.name}</p>
                    <Sorts id={element.id} />
                  </ThDiv>
                </th>
              )
            })}
          </TrHead>
        </thead>
        <TBodyContainer>
          {employees.map((employee, id) => {
            return (
              <TBody key={id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </TBody>
            )
          })}
        </TBodyContainer>
      </TableStyle>
    </TableContainer>
  )
}

export default Table
