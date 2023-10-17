import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page imports
import DisasterPage from './pages/DisasterPage/DisasterPage';
import LandingPage from './pages/LandingPage/LandingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// components 
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route
            path="/"
            element={<LandingPage />}
          />

          <Route
            path="/disaster/:id"
            element=
            {<DisasterPage />}
          />

          <Route
            path="/*"
            element={<NotFoundPage
            />}
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
