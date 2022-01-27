import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './globalStyles'


// Pages
import Home from './pages/Home'
import Pricing from './pages/PricingPage'
import Signup from './pages/SignupPage'


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/"  element={ <Home /> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;