import logo from '../logo.png';
import { Link } from "react-router-dom";
/*
import login from "../data/login.js";
import { useState } from "react"; */

/* const botonLogin = document.getElementById("login");

botonLogin.addEventListener("click", function () {

    const number = document.getElementById("number").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: number,
            password: password
        })
    }).then(function (respuesta) {
        return respuesta.json();
    }).then(function (res) {
        console.log(res);

        if (res.error) {
            alert('Ocurrió un error');
        } else {
            alert('Login Exitoso');
            localStorage.setItem('jwt', res.token);
        }
    });
});

*/
/*


    const [botonLogin] = useState([])
    const Login = (botonLogin) => {

        Login([...user, password])
    } */
export function Login() {
    return (
        <body id='bodylogin'>
            <div className="App">
                <top>
                    <div className="imgg">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </top>

                <section className="formLogIn">
                    <form method="POST" action="/Home">
                        <input className="datos" type="number" id="number" placeholder="Usuario"></input>
                        <input className="datos" type="password" id="password" placeholder="Contraseña"></input>

                        <Link to="Home"><input type="submit" className="boton" value="Iniciar Sesión" id="login"></input></Link>
                    </form>

                    <Link to='Olvidastelacontra' className="forgetPassword">
                        ¿Has olvidado la contraseña?
                    </Link>

                    <Link to="registro"><button className="botonCrear">Crear cuenta</button></Link>

                </section>

            </div >
        </body>

    )
}
