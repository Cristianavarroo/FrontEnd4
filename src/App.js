import Usuario  from "./Usuario"
import Encabezado from "./Encabezado"
import Formulario from "./Formulario"
import { Footer } from "./Footer";
import Contenido  from "./Contenido"


const usuarios = [
    { nombre:"Juan", apellido:"Pérez", email:"jperez@mail.com", url:"img/imagen1.jpg" },
    { nombre:"Lucas", apellido:"Rojas", email:"arojas@mail.com", url:"img/imagen2.jpg" },
    { nombre:"Armando", apellido:"Pleito", email:"apleito@mail.com", url:"img/imagen3.jpg" },
    { nombre:"Lucía", apellido:"Vargas", email:"apleito@mail.com", url:"img/imagen4.jpg" },
    { nombre:"Han", apellido:"Pleito", email:"apleito@mail.com", url:"img/imagen5.jpg" },
    { nombre:"Armando", apellido:"Pleito", email:"apleito@mail.com", url:"img/imagen6.jpg" }
];

const usuarioItems = usuarios.map( usuario => 
    <Usuario nombre={usuario.nombre} apellido={usuario.apellido}
     url={usuario.url} alt={usuario.nombre}></Usuario>
);

function App(){
    return(
       <div className='container mt-4'>
        <Encabezado/>
        <hr></hr>
        <Contenido/>
        <div className='row row-cols-1 row-cols-3'>
                {usuarioItems}
            </div>
        <Formulario/>
        <Footer/>
       </div>
       
    );
}

export default App;