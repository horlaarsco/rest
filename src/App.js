import React from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/project'>
            <Projects />
          </Route>
          <Route path='/about'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
