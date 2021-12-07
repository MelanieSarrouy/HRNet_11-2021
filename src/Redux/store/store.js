// IMPORTS // ______________________________________________________________

import { configureStore } from "@reduxjs/toolkit";
import { getEmployeesReducer } from "../reducers/getEmployeesReducer";

// STORE // ______________________________________________________________

export const store = configureStore({
  reducer: {
    getEmployees: getEmployeesReducer,
  }
})