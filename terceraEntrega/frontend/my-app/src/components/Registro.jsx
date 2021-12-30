import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section class="formR">
            <h4>Formulario de registro</h4>
            <input class="datosR" type="number" name="number" id="number" placeholder="Número de usuario" />
            <input class="datosR" type="email" name="email" id="email" placeholder="e-mail" />
            <input class="datosR" type="password" name="password" id="password" placeholder="Contraseña" />

            <input type="submit" class="botonR" value="Registrar" />
            <p><Link to="/terceraentrega">¿Ya tienes cuenta?</Link></p>
        </section>
    )
}