import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Properties from './components/Properties'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Properties />
    </div>
  )
}

export default App;
