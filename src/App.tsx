import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './pages/CountryDetails';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/country/:countryName" element={<CountryDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
