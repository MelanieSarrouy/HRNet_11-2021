// IMPORTS // ______________________________________________________________

import { addDoc, collection, getDocs } from '@firebase/firestore'
import { db } from './firebase'
// redux actions imports
import {
  employeesListError,
  employeesListLoading,
  employeesListSuccess,
} from '../Redux/actions/actionGetEmployees'

/**
 * getEmployees is an asynchrone function to get firebase database's list
 * @name getEmployees
 * @function
 * @param {object} store 
 */

export const getEmployees = async (store) => {
  store.dispatch(employeesListLoading())
  try {
    const employeesCollectionRef = collection(db, 'employees')
    const data = await getDocs(employeesCollectionRef)
    const employees = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    store.dispatch(employeesListSuccess(employees))
  } catch (error) {
    store.dispatch(employeesListError(error.message))
  }
}

/**
 * addAndGetEmployees is an asynchrone function to add new object on Firebase database 
 * then get firebase updating database's new list
 * @name addAndGetEmployees
 * @function
 * @param {object} store 
 */

export const addAndGetEmployees = async (store, newEmployee) => {
  store.dispatch(employeesListLoading())
  try {
    const employeesCollectionRef = collection(db, 'employees')
    await addDoc(employeesCollectionRef, newEmployee)
    const data = await getDocs(employeesCollectionRef)
    const employees = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    store.dispatch(employeesListSuccess(employees))
  } catch (error) {
    store.dispatch(employeesListError(error.message))
  }
}
