import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyle } from './styles/bases/globalStyle'
import Homepage from './pages/Homepage'
import EmployeesList from './pages/EmployeesList'
import { Main } from './styles/pages/homepage'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/employees-list" element={<EmployeesList />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
        </Main>
      </BrowserRouter>
    </>
  )
}

export default App
