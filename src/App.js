import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LanguageContext from "./utils/language-context";

import Home from "./pages/home";
import About from "./pages/about";
import MyWork from "./pages/myWork";
import Prices from "./pages/prices";
import Contact from "./pages/contact";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  const [language, setLanguage] = useState("de");

  return (
    <div className="app-container">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <BrowserRouter>
          <Header />
          <div className="body-container">
            <Switch>
              <Route exact path={"/:language(de|en|es)/"} component={Home} />
              <Route
                exact
                path={"/:language(de|en|es)/about"}
                component={About}
              />
              <Route
                exact
                path={"/:language(de|en|es)/my-work"}
                component={MyWork}
              />
              <Route
                exact
                path={"/:language(de|en|es)/prices"}
                component={Prices}
              />
              <Route
                exact
                path={"/:language(de|en|es)/contact"}
                component={Contact}
              />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
