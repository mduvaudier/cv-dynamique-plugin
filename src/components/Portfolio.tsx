import ProjectGrid from "./ProjectGrid";
import { useState} from "react";
import { useTranslation } from "react-i18next";
import { PortfolioProjectType } from "../assets/data/portfolio";



export default function Portfolio(): React.JSX.Element{
  const [isProjectTabOpen, setIsProjectTabOpen] = useState<boolean>(true);
  const [isCourseTabOpen, setIsCourseTabOpen] = useState<boolean>(false);
  const [isWordpressTabOpen, setIsWordpressTabOpen] = useState<boolean>(false);
  const { t } = useTranslation()

  function chooseTabOnClick(proj: PortfolioProjectType) {
    if (proj === "project" && !isProjectTabOpen) {
      setIsProjectTabOpen(true);
      setIsCourseTabOpen(false);
      setIsWordpressTabOpen(false);
    } else if (proj === "course") {
      setIsProjectTabOpen(false);
      setIsCourseTabOpen(true);
      setIsWordpressTabOpen(false);
    } else {
      setIsProjectTabOpen(false);
      setIsCourseTabOpen(false);
      setIsWordpressTabOpen(true);
    }
  }

  return (
    <section id="portfolio">
      <h2>{t("navbar.portfolio")}</h2>
      <div className="buttons-portfolio">
        <button
          className={isProjectTabOpen ? "button-active" : "button"}
          onClick={() => chooseTabOnClick("project")}
        >
          {t("portfolio.project")}
        </button>
        <button
          className={isCourseTabOpen ? "button-active" : "button"}
          onClick={() => chooseTabOnClick("course")}
        >
          {t("portfolio.course")}
        </button>
        <button
          className={isWordpressTabOpen ? "button-active" : "button"}
          onClick={() => chooseTabOnClick("wordpress")}
        >
          {t("portfolio.wordpress")}
        </button>
      </div>
      <div className="portfolio-table">
        {isProjectTabOpen && (
          <div className="projects-table">
            <ProjectGrid type="project" />
          </div>
        )}
        {isCourseTabOpen && (
          <div className="courses-table">
            <ProjectGrid type="course" />
          </div>
        )}
        {isWordpressTabOpen && (
          <div className="wordpress-table">
            <ProjectGrid type="wordpress" />
          </div>
        )}
      </div>
    </section>
  );
};
