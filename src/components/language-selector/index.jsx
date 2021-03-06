import React from "react";
import { useHistory } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
import staticStrings from "../../utils/strings";
import getClassByDevice from "../../utils/class-by-device";
import "./styles.css";

import german from "../../media/icons/l-german.png";
import english from "../../media/icons/l-english.png";
import spanish from "../../media/icons/l-spanish.png";

const languages = [
  { name: "de", url: german },
  { name: "en", url: english },
  { name: "es", url: spanish },
];

const LanguageSelector = (props) => {
  const { language, setLanguage } = props.langRelated;
  const history = useHistory();

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    const route = history.location.pathname.slice(4);
    history.push(`/${newLanguage}/${route}`);
  };

  return (
    <div className={`language-selector-${getClassByDevice(props.isMobile)}`}>
      {props.isMobile && <span>{staticStrings.language[language]}</span>}
      <div className="languages-container">
        <CheckIcon
          className={`check-icon check-${getClassByDevice(
            props.isMobile
          )}-${language}`}
        />
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
