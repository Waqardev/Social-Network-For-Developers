import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import register from "./components/auth/register";
import login from "./components/auth/login";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
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
