import timelineData from "../assets/data/timeline";
import Timecard from "./Timecard";
import { useTranslation } from "react-i18next";

export default function Timeline(props) {
  const {t} = useTranslation()

  const timeline = timelineData.map((item) => (
    <Timecard
      date={item.date}
      title={t(item.title)}
      text={t(item.text)}
      keywords={item.keywords}
      key={item.id}
      company={item.company}
    />
  ));

  return (
    <section id="timeline">
      <h2>{t("navbar.timeline")}</h2>
      {timeline}
    </section>
  );
};
