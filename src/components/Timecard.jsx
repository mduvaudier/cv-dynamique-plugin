import { useTranslation } from "react-i18next";

export default function Timecard(props) {
  const companies = props.company;
  const keywords = props.keywords
  const { t } = useTranslation();

  const companiesList = Array.isArray(companies)
    ? companies.map((item, id) => {
        const name = item?.name ?? "";
        const link = item?.link ?? "";
        return (
          <a className="tcard-company-link" href={link} key={id}>
            {t(name)}
          </a>
        );
      })
    : null;

  const keywordsList = Array.isArray(keywords)
    ? keywords.map((item, id) => {
        return (
          <div className="keyword" key={id}>
            {item}
          </div>
        );
      })
    : null;

  return (
    <div className="timecard">
      <div className="timecard-dot"></div>
      <div className="tcard">
        <div className="tcard-date">{props.date}</div>
        <div className="tcard-content">
          <div className="tcard-title">{props.title}</div>
          <div className="tcard-text">{props.text}</div>
          <div className="tcard-company">{t("timecard.enterprise")}</div>
          <div className="tcard-companies-list">{companiesList}</div>
          <div className="tcard-keywords">{keywordsList}</div>
        </div>
      </div>
    </div>
  );

  /*const companies = props.company;
  const {t} = useTranslation()

  
  const companiesList = Array.isArray(companies)
    ? companies.map((item, id) => {
        const name = item?.name ?? "";
        const link = item?.link ?? "";
        return (
          <a href={link} key={id}>
            {t(name)}
          </a>
        );
      })
    : null;

  return (
    <div className="timecard">
      <div className="timecard-dot"></div>
      <div className="flip-card">
        <div className="tcard">
          <div className="tcard-front">
            <div className="timecard-date">{props.date}</div>
            <div className="timecard-content">
              <div className="timecard-title">{props.title}</div>
              <div className="timecard-text">
                {props.state ? props.text : props.text.slice(0, 100)}
              </div>
              {props.mobile && <button onClick={props.onClick}>Test</button>}
            </div>
          </div>
          <div className="tcard-back">
            <div className="timecard-keywords">
              <h3>{t("timecard.keywords")}</h3>
              <p>{props.keyWords}</p>
            </div>
            <div className="timecard-links">
              <h3>{t("timecard.enterprise")}</h3>
              {companiesList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );*/
}
