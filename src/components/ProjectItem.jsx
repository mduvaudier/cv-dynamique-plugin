export default function ProjectItem(props){
    return(
        <div className="project-item">
            <img src={props.image} alt={props.alt} />
            <h4>{props.title}</h4>
            <a className="lien-item" href={props.url}></a>
        </div>
        
    )
}