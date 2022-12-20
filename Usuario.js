import Foto from "./Foto";
import Info from "./Info";
import './Usuario.css';


function Usuario(props) {
    return (
        <div className="col">
            <div className="card">
                <Foto url={props.url} alt={props.alt}/>
                <Info nombre={props.nombre} 
                    comentario={props.comentario} 
                     />
            </div>
        </div>
    );
}

export default Usuario;