interface ProjectItemProps{
    url: string;
    image: string;
    alt: string;
    title: string;
}

export default function ProjectItem(props: ProjectItemProps): React.JSX.Element{
    return(
        <div className="project-item">
            <a className="lien-item" href={props.url}><img src={props.image} alt={props.alt} /></a>
            <h4>{props.title}</h4>
            
        </div>
        
    )
}