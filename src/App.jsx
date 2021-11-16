import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { GlobalStyle } from './styles/bases/globalStyle';
import Homepage from './pages/Homepage'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <main>
          <section>
            <Routes>
              <Route path="/" element={<Homepage />} />
              {/* <Route exact path="/employee-list" component={SignIn} />
              <Route component={NotFound} /> */}
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
