import portfolioData from "../assets/data/portfolio"
import Port from "./ProjectItem"
import { useTranslation } from "react-i18next"

export default function ProjectGrid(props){
    const tableau = portfolioData.filter(el => el.type === props.type)
    const { t } = useTranslation()

    const listPorts = tableau.map(prev => <Port key={prev.id} title={t(prev.title)} url={prev.url} image={prev.image} alt={t(prev.alt)}/>)
    return(
        <div className="project-grid">
            {listPorts}
        </div>
    )
}