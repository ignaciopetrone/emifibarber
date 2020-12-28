import React from "react";
import "./styles.css";
import CheckIcon from "@material-ui/icons/Check";

import german from "../../media/icons/l-german.png";
import english from "../../media/icons/l-english.png";
import spanish from "../../media/icons/l-spanish.png";

const languages = [
  { name: "german", url: german },
  { name: "english", url: english },
  { name: "spanish", url: spanish },
];

const LanguageSelector = (props) => {
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
            onClick={() => console.log(name)}
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
