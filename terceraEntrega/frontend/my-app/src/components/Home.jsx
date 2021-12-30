import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <header>
                <a href="/abonar">
                    <h5 className="mensualidad">Abonar mensualidad</h5>
                </a>
                <Link to="/terceraentrega">
                    <h5 className="cerrarSesion">Cerrar sesión</h5>
                </Link>
            </header>

            <top>
                <h1>Bienvenido</h1>
            </top>

            <main>
                <div className="informacionn">
                    <p>Para reservar la actividad <br />
                        primero debes seleccionarla y luego <br />
                        clickear el botón que dice "reserva" <br />
                        en el horario deseado.</p> <br />

                    <p>Si quieres mejorar tu <br />
                        rendimiento o alcanzar <br />
                        tu objetivo más rápido <br />
                        puedes acceder a nuestro <br />
                        catálogo de productos y <br />
                        retirarlo en el gimnasio. <br />
                        <Link to="/Catalogo"><button className="catalogo">Cátalogo</button></Link>
                    </p>
                </div>

                <div className="botoness">
                    <Link to="/Dancefit">
                        <div className="actividades">
                            DANCE FIT
                        </div>
                    </Link>
                    <Link to="/Spinning">
                        <div className="actividades">
                            SPINNING
                        </div>
                    </Link>
                    <Link to="/Funcional">
                        <div className="actividades">
                            FUNCIONAL
                        </div>
                    </Link>

                    <Link to="/Gap">
                        <div className="actividades">
                            GAP
                        </div>
                    </Link>

                </div>
            </main>
        </div >
    )
};
