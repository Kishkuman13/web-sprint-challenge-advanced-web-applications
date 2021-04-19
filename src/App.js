import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from './components/BubblePage';

import Login from "./components/Login";
import ProtectedRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  const logout = () => {
    localStorage.removeItem('token')
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" onClick={logout} to='/'>logout</a>
        </header> 

        <ProtectedRoute exact path='/bubbles' component={BubblePage}  />

        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.