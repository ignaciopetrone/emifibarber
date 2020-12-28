import React from "react";
import { useHistory } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
import "./styles.css";

import german from "../../media/icons/l-german.png";
import english from "../../media/icons/l-english.png";
import spanish from "../../media/icons/l-spanish.png";

const languages = [
  { name: "de", url: german },
  { name: "en", url: english },
  { name: "es", url: spanish },
];

const LanguageSelector = ({ setLanguage }) => {
  const history = useHistory();

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    const route = history.location.pathname.slice(4);
    history.push(`/${newLanguage}/${route}`);
  };

  return (
    <div className="language-selector">
      <span>Language</span>
      <div className="languages-container">
        <CheckIcon />
        {languages.map(({ name, url }) => (
          <img
            key={name}
            src={url}
            alt={name}
            onClick={() => changeLanguage(name)}
          />
        ))}
      </div>
    </div>
  );
};
export default LanguageSelector;

// germany left 30px
// english left 112px
// spanish left 191px
