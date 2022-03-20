import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const [party, setParty] = useLocalStorage('party', []);

  return (
    <>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<Home party={party} />} />
          <Route
            path="/details/:pokemon"
            element={<Details party={party} setParty={setParty} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
