/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from './components/Navigation'; 
import MainPage from './MainPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />  
        <MainPage />
      </BrowserRouter>
    </>
  );
}

export default App;
