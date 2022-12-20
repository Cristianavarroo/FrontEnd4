function Formulario(){
    return(
        <div>
            <h2>Formulario</h2>
            <hr></hr>
            <form class="row g-3">
            <div class="col-md-6">
                <label for="Nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre" pattern="[a-zA-Z-´]"></input>
            </div>
            <div class="col-md-6">
                <label for="Correo" class="form-label">Correo electronico</label>
                <input type="email" class="form-control" id="email" placeholder="mail@example.com" required></input>
            </div>
            <div class="mb-3">
                <label for="Comentario" class="form-label">Comentario</label>
                <textarea class="form-control" id="comentario" rows="6"></textarea>
               
               
            </div>
            <div class="col-6">
                <button type="submit" class="btn btn-primary">Enviar</button>

            </div>




            </form>
           
        </div>
    );

}
export default Formulario;