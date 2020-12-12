import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import MyWork from "./pages/myWork";
import Prices from "./pages/prices";
import Contact from "./pages/contact";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => (
  <div className="app-container">
    <BrowserRouter>
      <Header />
      <div className="body-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/my-work" component={MyWork} />
          <Route exact path="/prices" component={Prices} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
