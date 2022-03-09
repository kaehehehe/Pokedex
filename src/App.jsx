import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import GlobalStyle from './GlobalStyle';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home pokemons={pokemons} setPokemons={setPokemons} />}
          />
          <Route
            path="/details/:pokemon"
            element={<Details pokemons={pokemons} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
