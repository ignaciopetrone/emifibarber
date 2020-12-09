import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import MyWork from "./pages/myWork";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => (
  <div className='app-container'>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/my-work' component={MyWork} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
