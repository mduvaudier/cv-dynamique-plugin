import Top from "./components/Top";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import BackgroundImage from "./components/BackgroundImage";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      {i18n.language === "fr" ? (
        <button onClick={() => changeLanguage("en")}>En</button>
      ) : null}
      {i18n.language === "en" ? (
        <button onClick={() => changeLanguage("fr")}>Fr</button>
      ) : null}
    </div>
  );
}

export default function App() {
  const { t } = useTranslation();


  return (
    <>
      <BackgroundImage />
      <main>
        <header>
          <nav>
            <a href="#timeline">{t("navbar.timeline")}</a>
            <a href="#portfolio">{t("navbar.portfolio")}</a>
            <LanguageSwitcher />
          </nav>
        </header>
        <Top />
        <Timeline/>
        <div className="in-between"></div>
        <Portfolio/>
      </main>
    </>
  );
}
