export default function Cart ({ cartItem, addToCart, removeToCart }) {

    const {imagen, nombre, marca, tamaño, cantidad} = cartItem

    return (
        <div className="cart-item">
            <div className="cart-item_info">
                <img src={`/img/${imagen}`} alt=""/>
                <p>{ nombre + ' ' + marca + ' ' + tamaño }</p>
            </div>
            <div className="cart-item_count">
                <p className="buttonAdd" onClick={ () => addToCart(cartItem) }>+</p><p>{ cantidad }</p><p className="buttonRemove" onClick={ () => removeToCart(cartItem) }>-</p>
            </div>
        </div>
    )
    
}