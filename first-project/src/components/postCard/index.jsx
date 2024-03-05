//todo: conhecido como props
import './style.css'

export const PostCard = (props) => {
    
    return(
        <div className="card">
        <img src={props.photoUrl}></img>
          <h4>Titulo: { props.title } </h4>
          <p> {props.completed ? "Conpletada" : "Por fazer"} </p>
      </div>
    )
}