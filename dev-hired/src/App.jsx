import React from "react";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import "./App.css";

function App() {
  return <div className="App">
    <h1>Dev Hired</h1>
    <h3>Your personal portal to organize all the jobs that you applied for</h3>
    <Login />
    <Register />
  </div>;
}

export default App;
