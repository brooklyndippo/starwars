import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import StarWars from './components/StarWars';
import { useState } from 'react';

function App() {

  return (
    <div className="container">
    <Home/>
    <StarWars />
    </div>
  );
}

export default App;

