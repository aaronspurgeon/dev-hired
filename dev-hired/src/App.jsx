import React from "react";
import Welcome from './components/Welcome/Welcome'
import Jobs from './components/Jobs/Jobs'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { Route } from 'react-router-dom'
import { AuthProvider } from './Auth';
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">

        <Route exact path='/' component={Welcome} />
        <PrivateRoute path='/home' component={Jobs} />
      </div>
    </AuthProvider>
  );
}

export default App;
