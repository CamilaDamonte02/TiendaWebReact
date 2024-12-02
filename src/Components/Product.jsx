export default function Producto() {
    return (
        <>
            <div className="product-item">
                <img src="https://picsum.photos/200?random=5" alt=""/>
                <p className="product-name">Tofu</p>
                <p className="product-brand">Naturaleza</p>
                <p className="product-size">400 gr</p>
                <button className="products-button-add">Agregar</button>
            </div>
        </>
    )
}