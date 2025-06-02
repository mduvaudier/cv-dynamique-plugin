import avatar from "../public/images/AvatarMaker.png";
import mail from "../assets/data/mail"
import { useTranslation } from "react-i18next";

export default function Card() {
   const { t } = useTranslation();
  return (
    <div className="card">
      <div className="card-image">
        <img src={avatar} alt={t("card.altphoto")} />
      </div>
      <div className="card-info">
        <hgroup>
          <h1>{t("card.name")}</h1>
        <h2>{t("card.post")}</h2>
        </hgroup>
        <div className="card-ligne-lieu">
          <span className="card-lieu">{t("card.place")}</span>
          <span className="card-ottawa">{t("card.town")}</span>
        </div>
        <a href={mail}>{t("card.contact")}</a>
      </div>
    </div>
  );
}
