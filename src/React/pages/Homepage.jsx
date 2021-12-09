// IMPORTS // ______________________________________________________________

import React, { useState } from 'react'
import { useStore } from 'react-redux'
// styles imports
import {
  Form,
  DivButton,
  DivInputWrapper,
  DivInputDateWrapper,
  DivInputZipWrapper,
  FieldsetStyle,
  InputButton,
  Legend,
} from '../../styles/pages/homepage'
// components imports
import Select from '../components/Select'
import Input from '../components/Input'
// Modal npm package import
import { Modal } from 'simple-react-modal-ui'
// firebase imports
import { addAndGetEmployees } from '../../firebase/firebaseServices'
// functions imports
import { sortDepartments } from '../../helpers/form/sortDepartments'
// datas imports
import departments from '../../datas/departments'
import states from '../../datas/states'

// JSX // _________________________________________________________________

/**
 * Homepage component to display website's homepage
 * @name Homepage
 * @returns {?JSX}
 */

const Homepage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('AL')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('engineering')

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const store = useStore()

  const departmentsSorted = departments.sort(sortDepartments)

  const USAStates = states

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const newEmployee = () => {
    return {
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
  }
  const reset = () => {
    setFirstName('')
    setLastName('')
    setDateOfBirth('')
    setStartDate('')
    setStreet('')
    setCity('')
    setState('AL')
    setZipCode('')
    setDepartment('Sales')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addAndGetEmployees(store, newEmployee)
    setModalIsOpen(true)
    reset()
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
          <Select // States
            direction={'column'}
            alignItems={'left'}
            forAndId={'state'}
            value={state}
            onChange={(e) => {
              setState(e.target.value)
            }}
            optionsList={USAStates}
          />
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

        <Select // Department
          direction={'column'}
          alignItems={'left'}
          forAndId={'department'}
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value)
          }}
          optionsList={departmentsSorted}
        />

        <DivButton>
          <InputButton type="submit" value="Save" data-testid='save'/>
        </DivButton>
      </Form>

      {/* modal */}

      {modalIsOpen && (
        <Modal
          hideModal={closeModal}
          styleModalBackground
          styleModal
          styleModalContent
          animation={true}
          closeButton={true}
        >
          <p>New employee created !</p>
        </Modal>
      )}
    </>
  )
}

// EXPORT // ______________________________________________________________

export default Homepage
