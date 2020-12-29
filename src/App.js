import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import LanguageContext from "./utils/language-context";
import { isMobile } from "react-device-detect";

import Home from "./pages/home";
import About from "./pages/about";
import MyWork from "./pages/myWork";
import Prices from "./pages/prices";
import Contact from "./pages/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import getClassByDevice from "./utils/class-by-device";

const availableLangs = ["de", "en", "es"];
const langPath = "/:lang(de|en|es)";

const App = () => {
  const { push, location } = useHistory();
  const requestedLang = location.pathname.slice(1, 3); // Capture the "de|en|es"

  const isLangCorrect = availableLangs.includes(requestedLang);
  if (!isLangCorrect) {
    // If requested language is incorrect, redirect the user to /de/
    push("/de/");
  }
  const [language, setLanguage] = useState(requestedLang);

  return (
    <div className="app-container">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Header />
        <div className={`body-container-${getClassByDevice(isMobile)}`}>
          <Switch>
            <Route exact path={`${langPath}/`} component={Home} />
            <Route exact path={`${langPath}/about`} component={About} />
            <Route exact path={`${langPath}/my-work`} component={MyWork} />
            <Route exact path={`${langPath}/prices`} component={Prices} />
            <Route exact path={`${langPath}/contact`} component={Contact} />
          </Switch>
        </div>
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
