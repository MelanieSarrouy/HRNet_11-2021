import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyle } from '../styles/bases/globalStyle'
import Homepage from './pages/Homepage'
import EmployeesList from './pages/EmployeesList'
import { Main } from '../styles/pages/homepage'
import { useStore } from 'react-redux'
import { useEffect } from 'react'
import { getEmployees } from '../firebase/firebaseServices'
import NotFoundPage from './pages/NotFoundPage'
import styled from 'styled-components'


export const Divimg = styled.div`
  position: fixed;
  right: -10rem;
  bottom: -10rem;
  z-index: 0;
  & img {
    width: 20rem;
  }
`
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
