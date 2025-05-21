import { forwardRef, useState, useEffect } from "react";
import timelineData from "../assets/data/timeline";
import Timecard from "./Timecard";
import { useTranslation } from "react-i18next";

const Timeline = forwardRef((props, ref) => {
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
    <section className="timeline" ref={ref}>
      <h2>{t("navbar.timeline")}</h2>
      {timeline}
    </section>
  );
});

export default Timeline;
