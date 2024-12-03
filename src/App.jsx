import { useState } from "react"
import Product from "./Components/Product"
import {db} from "./data/db"

function App() {

  const[data] = useState(db)

  return (
    <>   
        <div className="shopping-container">
            <div className="products">
                <div className="products-title">
                    <h1>Productos Aptos</h1>
                    <h3>Arma tu lista de compras y descargala</h3>
                </div>
                <div className="products-category-all">
                    <div className="products-category">
                        <div className="products-category_icon">
                            <img src="https://picsum.photos/200?random=4" alt=""/>
                        </div>
                        <p>Panificado</p>
                    </div>
                </div>
                <div className="products-items-all">
                  {data.map((product) => (
                    <Product
                      key={product.id}
                      product = {product}
                    />
                  ))}
                </div>
                <button className="products-button">Ver más productos</button>
            </div>
            <div className="cart">
                <div className="cart-titles">   
                    <h2>Tu compra</h2>
                    <h3>Tienes 4 artículos en tu carrito</h3>
                </div>
                <div className="cart-all-items">
                    <div className="cart-item">
                        <div className="cart-item_info">
                            <img src="https://picsum.photos/200?random=1" alt=""/>
                            <p>Tofu ahumado Naturaleza 470g</p>
                        </div>
                        <div className="cart-item_count">
                            <p>+</p><p>1</p><p>-</p>
                        </div>
                    </div>
                </div>
                <div className="cart-actions">
                    <div className="cart-actions_item">
                        <img src="https://picsum.photos/200?random=2" alt=""/> 
                        <p>Imprimir</p>
                    </div>
                    <div className="cart-actions_item">
                        <img src="https://picsum.photos/200?random=3" alt=""/> 
                        <p>Descargar</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
