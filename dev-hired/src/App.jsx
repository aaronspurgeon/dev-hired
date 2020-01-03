import React from "react";
import Welcome from './components/Welcome/Welcome'
import Jobs from './components/Jobs/Jobs'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Nav from './components/Nav/Nav'
import { Route } from 'react-router-dom'
import { AuthProvider } from './Auth';
import "./App.css";

function App() {
  console.log(process.env.REACT_APP_FIREBASE_KEY);
  return (
    <AuthProvider>
      <div className="App">
        <Nav />

        <Route exact path='/' component={Welcome} />
        <Route path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute path='/home' component={Jobs} />
      </div>
    </AuthProvider>
  );
}

export default App;
