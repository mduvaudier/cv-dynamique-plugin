import portfolioData from "../assets/data/portfolio"
import Port from "./ProjectItem"
import { useTranslation } from "react-i18next"
import type { Project, PortfolioProjectType } from "../assets/data/portfolio"
import React from "react"

interface ProjectGridProps {
    type: PortfolioProjectType;
}

export default function ProjectGrid(props: ProjectGridProps): React.JSX.Element{
    const tableau: Project[] = portfolioData.filter((el: Project) => el.type === props.type)
    const { t } = useTranslation()

    const listPorts: React.JSX.Element[] = tableau.map((prev: Project) => <Port key={prev.id} title={t(prev.title)} url={prev.url} image={prev.image} alt={t(prev.alt)}/>)

    return(
        <div className="project-grid">
            {listPorts}
        </div>
    )
}