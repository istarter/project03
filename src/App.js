import React from 'react';
import Signup from  './signUp'
import Login from './Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Signup name="Najeeb" email="naxibkhan@gmail.com" />
      <Login username="najibkhan" pass="pass123" />
    </div>
  );
}

export default App;
