import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ImgMediaCard from './Cart/cart';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
