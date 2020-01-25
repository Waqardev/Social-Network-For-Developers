import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Navbar from "./components/layout/Navbar";
import test from "./test/test";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import register from "./components/auth/register";
import login from "./components/auth/login";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

//Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //Check for expire token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //TODO: Clear current profile

    //Redirect to login
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/test" component={test} />
            <Route exact path="/register" component={register} />
            <Route exact path="/login" component={login} />
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
