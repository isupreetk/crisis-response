import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page imports
import GetHelpPage from './pages/GetHelpPage/GetHelpPage';
import LandingPage from './pages/LandingPage/LandingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// components 
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <main className='app'>
        <BrowserRouter>
          <NavBar />
          <Routes>

            <Route
              path="/"
              element={<LandingPage />}
            />

            <Route
              path="/gethelp/:id"
              element=
              {<GetHelpPage />}
            />

            <Route
              path="/*"
              element={<NotFoundPage
              />}
            />

          </Routes>
          <Footer />
        </BrowserRouter>
      </main>

    </>
  );
}

export default App;
