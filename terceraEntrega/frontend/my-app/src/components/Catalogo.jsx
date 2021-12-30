import productos from "../data/catalogo.json";
import { useState } from "react";

export default function Catalogo() {

    const [cart, setCart] = useState([])
    const addToCart = (producto) => {

        setCart([...cart, producto])
    }

    return (

        <body className="bodyCatalogo">
            <header className="headerCatalogo">
                <h1>Catálogo de productos.</h1>
            </header>
            <article className="articleCatalogo">
                <h3 className="h3Catalogo">Carrito de compras</h3>
                <hr className="separadorUno" />
            </article>
            <aside className="asideCatalogo">
                <div className="tablaCatalogo">
                    <table id="preventaCatalogo">
                        <tbody>
                            <tr>
                                <td className="prod">Productos</td>
                                <td className="precio">Precio</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pagar">

                    Total= $<span id="totalPrecio" >{cart.reduce((prev, producto) => { return prev + producto.precio }, 0)}</span><br />
                    <button id="btn">Pagar</button>
                    <button id="btnDos" onClick={() => setCart([])}>Eliminar carrito</button>
                </div>
            </aside>
            <hr className="hrCatalogo" />
            <main className="mainCatalogo">
                {
                    productos.map(producto => {

                        return (
                            <div key={producto.id}>
                                <h2>{producto.nombre}</h2>
                                <img src={producto.link} alt={producto.nombre}></img>
                                <p>${producto.precio}</p>
                                <button onClick={() => addToCart(producto)}>Agregar</button>
                            </div>
                        )
                    })
                }
            </main>
        </body>

    )
}