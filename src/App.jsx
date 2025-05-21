import Top from "./components/Top";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import BackgroundImage from "./components/BackgroundImage";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

export default function App() {
  
  const { t } = useTranslation();

  function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    return (
      <div>
        {i18n.language === "fr" ? <button onClick={() => changeLanguage("en")}>En</button> : null}
        {i18n.language === "en" ? <button onClick={() => changeLanguage("fr")}>Fr</button> : null}
      </div>
    );
  }

  const refs = [useRef(null), useRef(null)];

  function handleClick(section) {
    refs[section].current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <BackgroundImage />
      <main>
        <header>
          <nav>
            <button onClick={() => handleClick(0)}>
              {t("navbar.timeline")}
            </button>
            <button onClick={() => handleClick(1)}>
              {t("navbar.portfolio")}
            </button>
            <LanguageSwitcher />
          </nav>
        </header>
        <Top />
        <Timeline ref={refs[0]} />
        <div className="in-between"></div>
        <Portfolio ref={refs[1]} />
      </main>
    </>
  );
}
