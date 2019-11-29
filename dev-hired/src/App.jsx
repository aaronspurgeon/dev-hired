import React from "react";
import Welcome from './components/Welcome/Welcome'
import Jobs from './components/Jobs/Jobs'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { Route } from 'react-router-dom'
import "./App.css";

function App() {
  return <div className="App">

    <Route exact path='/' component={Welcome} />
    <PrivateRoute path='/home' component={Jobs} />
  </div>;
}

export default App;
