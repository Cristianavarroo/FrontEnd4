function Info(props) {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.nombre} {props.apellido}</h5>
            <p className="card-text">{props.email}</p>
        </div>
    );    
}

export default Info;