import { useState } from "react"
import Product from "./Components/Product"
import Cart from "./Components/Cart"
import Category from "./Components/Category"
import {db, categories } from "./data/db"

function App() {

    const[data, setData] = useState(db)
    const [categoryList, setCategoryList] = useState(categories);
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        //Verifica si existe en el carrito antes de agregarlo
        const productExistsCart = cart.findIndex(product => product.id === item.id)

        if (productExistsCart > -1) { // ya existe en el carrito
            const updatedCart = [...cart]
            updatedCart[productExistsCart].cantidad++
            setCart(updatedCart)
        }else{ //No existe en el carrito
            item.cantidad = 1
            setCart(prev => [...prev, item])
        }
    }

    const removeToCart = (item) => {
        //Verifica si existe en el carrito antes de agregarlo
        const productExistsCart = cart.findIndex(product => product.id === item.id)

        if (productExistsCart > -1) { // Si el producto existe en el carrito
            if(item.cantidad > 1){ // Si la cantidad es mayor a 1, disminuye la cantidad
                const updatedCart = [...cart]
                updatedCart[productExistsCart].cantidad--
                setCart(updatedCart)
            }else{ // Si la cantidad es 1 o menor, elimina el producto del carrito
                const updatedCart = cart.filter(product => product.id !== item.id);
                setCart(updatedCart);
            }
        }
    }

    return (
        <>   
            <div className="shopping-container">
                <div className="products">
                    <div className="products-title">
                        <h1>Productos Aptos</h1>
                        <h3>Arma tu lista de compras y descargala</h3>
                    </div>
                    <div className="products-category-all">
                        {categoryList.map((category) => (
                            <Category 
                            key={category.id} 
                            category={category} />
                        ))}
                    </div>
                    <div className="products-items-all">
                        {data.map((product) => (
                            <Product
                            key = {product.id}
                            product = {product}
                            addToCart = {addToCart}
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
                        {cart.map(cartItem => (
                            <Cart
                            key = {cartItem.id}
                            cartItem = { cartItem }
                            addToCart = { addToCart }
                            removeToCart = { removeToCart }
                            />
                        ))}
                    </div>
                    <div className="cart-actions">
                        <div className="cart-actions_item">
                            <img src="../public/img/iconoPrint.png" alt=""/> 
                            <p>Imprimir</p>
                        </div>
                        <div className="cart-actions_item">
                            <img src="../public/img/iconoDownload.png" alt=""/> 
                            <p>Descargar</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default App
