import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../components/Input'
import Modale from '../components/Modale'
import departments from '../datas/department'
import states from '../datas/states'
import { createNewEmployee } from '../Redux/actions/actionCreateEmployee'
import { InputLabel, InputWrapper } from '../styles/components/input'
import {
  Form,
  DivButton,
  DivInputWrapper,
  DivInputDateWrapper,
  DivInputZipWrapper,
  FieldsetStyle,
  InputButton,
  SelectStyle,
  Legend,
} from '../styles/pages/homepage'

const Homepage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('')

  const departmentSorted = departments.sort()
  const USAStates = states

  const [modaleIsOpen, setModaleIsOpen] = useState(false)
  const closeModale = () => {
    setModaleIsOpen(false)
  }

  const dispatch = useDispatch()

  const employee = useSelector((state) => state.newEmployee.employee)
  console.log(employee)
  const newEmployee = {
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    startDate: startDate,
    street: street,
    city: city,
    state: state,
    zipCode: zipCode,
    department: department,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewEmployee(newEmployee))
    setModaleIsOpen(true)
  }

  return (
    <>
      <h2 className="sr-only">Create employee</h2>
      <Form onSubmit={handleSubmit}>
        <DivInputWrapper>
          <Input // First Name
            direction={'column'}
            forAndId={'first-name'}
            inputType={'text'}
            value={firstName}
            required={true}
            placeholder={''}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
          <Input // Last Name
            direction={'column'}
            forAndId={'last-name'}
            inputType={'text'}
            value={lastName}
            required={true}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        </DivInputWrapper>
        <DivInputDateWrapper>
          <Input // Date of Birth
            direction={'column'}
            forAndId={'date-of-birth'}
            inputType={'date'}
            value={dateOfBirth}
            required={true}
            onChange={(e) => {
              setDateOfBirth(e.target.value)
            }}
          />
          <Input // Start Date
            direction={'column'}
            forAndId={'start-date'}
            inputType={'date'}
            value={startDate}
            required={true}
            onChange={(e) => {
              setStartDate(e.target.value)
            }}
          />
        </DivInputDateWrapper>

        <FieldsetStyle>
          <Legend>Address</Legend>
          <DivInputWrapper>
            <Input // Street
              direction={'column'}
              forAndId={'street'}
              inputType={'text'}
              value={street}
              required={true}
              onChange={(e) => {
                setStreet(e.target.value)
              }}
            />
            <Input // City
              direction={'column'}
              forAndId={'city'}
              inputType={'text'}
              value={city}
              required={true}
              onChange={(e) => {
                setCity(e.target.value)
              }}
            />
          </DivInputWrapper>

          <InputWrapper direction={'column'}>
            <InputLabel htmlFor="state">State</InputLabel>
            <SelectStyle
              name="state"
              id="state"
              onChange={(e) => {
                setState(e.target.value)
              }}
            >
              {USAStates.map((state, index) => {
                return (
                  <option key={index} value={state.abbreviation}>
                    {state.name}
                  </option>
                )
              })}
            </SelectStyle>
          </InputWrapper>

          <DivInputZipWrapper>
            <Input // Zip Code
              direction={'row'}
              forAndId={'zip-code'}
              inputType={'number'}
              value={zipCode}
              required={true}
              onChange={(e) => {
                setZipCode(e.target.value)
              }}
            />
          </DivInputZipWrapper>
        </FieldsetStyle>

        <InputWrapper direction={'column'}>
          <InputLabel htmlFor="department">Department</InputLabel>
          <SelectStyle
            name="department"
            id="department"
            onChange={(e) => {
              setDepartment(e.target.value)
            }}
          >
            {departmentSorted.map((department, index) => {
              return (
                <option key={index} value={department.name}>
                  {department.name}
                </option>
              )
            })}
          </SelectStyle>
        </InputWrapper>
        <DivButton>
          <InputButton type="submit" value="Save" />
        </DivButton>
      </Form>

      {modaleIsOpen && <Modale hideModale={closeModale}/>}

    </>
  )
}

export default Homepage
