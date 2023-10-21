import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

//data
import disaster from "./data/disasters.json";

// page imports
import GetHelpPage from './pages/GetHelpPage/GetHelpPage';
import LandingPage from './pages/LandingPage/LandingPage';
import DonatePage from './pages/DonatePage/DonatePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// components 
// import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import disasterData from './data/disasters.json';

function App() {

  let [disasterList, setDisasterList] = useState(disaster);
  let [selectedDisaster, setSelectedDisaster] = useState();

  return (
    <>
      <main className='app'>
        <BrowserRouter>
          {/* <NavBar /> */}
          <Routes>

            <Route
              path="/"
              element={<LandingPage disasterData={disasterData} />}
            />

            <Route
              path="/gethelp/:id"
              element=
              {<GetHelpPage disasterData={disasterData} />}
            />

            <Route
              path='donate/:id'
              element={<DonatePage />}
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
