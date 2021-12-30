import { Link } from "react-router-dom";

export default function Olvidastelacontra() {
    return (

        <section className="form">
            <h4>Recupera la contraseña</h4>
            <input className="datos" type="number" name="number" placeholder="Número de usuario" />
            <input className="datos" type="email" name="email" id="email" placeholder="Ingrese su email" />

            <button className="botonnnn">Enviar nueva contraseña</button>
            <p><Link to="/terceraentrega">Ir al sitio anterior</Link></p>
        </section>

    )
}