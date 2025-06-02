export default function ProjectItem(props){
    return(
        <div className="project-item">
            <a className="lien-item" href={props.url}><img src={props.image} alt={props.alt} /></a>
            <h4>{props.title}</h4>
            
        </div>
        
    )
}