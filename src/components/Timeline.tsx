import timelineData from "../assets/data/timeline";
import Timecard from "./Timecard";
import { useTranslation } from "react-i18next";
import type { TimeStop } from "../assets/data/timeline";

export default function Timeline(): React.JSX.Element {
  const {t} = useTranslation()

  const timeline: React.JSX.Element[] = timelineData.map((item: TimeStop) => (
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
