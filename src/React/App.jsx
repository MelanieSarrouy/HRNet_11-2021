// IMPORTS // ______________________________________________________________

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useStore } from 'react-redux'
import { useEffect } from 'react'
// styles imports
import { GlobalStyle } from '../styles/bases/globalStyle'
import { Main } from '../styles/bases/main'
// firebase imports
import { getEmployees } from '../firebase/firebaseServices'
// components imports
import Header from './components/Header'
import Homepage from './pages/Homepage'
import EmployeesList from './pages/EmployeesList'
import NotFoundPage from './pages/NotFoundPage'

// JSX // _________________________________________________________________

/**
 * App's component to manage various routes
 * and display corresponding pages components
 * @name App
 * @returns {?JSX}
 */

export const App = () => {
  const store = useStore()

  useEffect(() => {
    getEmployees(store)
  }, [store])

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/employees-list" element={<EmployeesList />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  )
}
