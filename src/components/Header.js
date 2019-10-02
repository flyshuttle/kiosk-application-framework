import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import config from "../configuration";
import { useLanguage } from "../contexts/LanguageContext";
import { useAnalytics } from "../analytics/Analytics";
import { translateText } from "./TranslatedRichText";

import LanguageControls from "./LanguageControls";

export default function Header() {
  const [language, setLanguage] = useLanguage();
  const analytics = useAnalytics();

  const changeLanguage = language => {
    analytics.setLanguage(language);
    setLanguage(language);
  };

  return (
    <header>
      <Link className="btn btn-secondary mr-4" to="/">
        <FontAwesomeIcon icon={faHome} size="1x" />{" "}
        {translateText("labels.home")}
      </Link>
      <Link className="btn mr-2" to="/page-one">
        {translateText("labels.pageOne")}
      </Link>
      <Link className="btn mr-2" to="/page-two">
        {translateText("labels.pageTwo")}
      </Link>
      <Link className="btn" to="/page-three">
        {translateText("labels.pageThree")}
      </Link>
      <LanguageControls
        locales={config.i18n.locales}
        currentLocale={language}
        changeLanguage={changeLanguage}
      />
    </header>
  );
}
