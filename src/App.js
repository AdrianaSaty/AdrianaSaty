import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

    </div>
  );
}

export default App;
