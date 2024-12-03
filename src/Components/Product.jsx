export default function Producto ({product, addToCart}) {

    const {imagen, nombre, marca, tamaño} = product

    return (
        <>
            <div className="product-item">
                <img src= {`/img/${imagen}`} alt=""/>
                <p className="product-name"> {nombre} </p>
                <p className="product-brand"> {marca} </p>
                <p className="product-size">{tamaño}</p>
                <button 
                    className="products-button-add"
                    type="button"
                    onClick={ () => addToCart(product) }
                >Agregar</button>
            </div>
        </>
    )
}