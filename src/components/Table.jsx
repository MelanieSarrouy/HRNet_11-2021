import React from 'react'
import {
  TableContainer,
  TableStyle,
  TBodyContainer,
  TBody,
  ThDiv,
  TrHead,
} from '../styles/components/table'
import SVG from './SVG'

const tableHead = [
  'First Name',
  'Last Name',
  'Start Date',
  'Department',
  'Date of birth',
  'Street',
  'City',
  'State',
  'Zip Code',
]

const Table = ({ employees }) => {

  return (
    <TableContainer>
      <TableStyle>
        <thead>
          <TrHead>
            {tableHead.map((element, index) => {
              return (
                <th key={index}>
                  <ThDiv>
                    <p>{element}</p>
                    <SVG />
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
                <td>{employee.dateOfBirth}</td>
                <td>{employee.department}</td>
                <td>{employee.startDate}</td>
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
