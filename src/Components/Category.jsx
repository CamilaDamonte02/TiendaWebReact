export default function Category({ category }) {
    return (
        <div className="products-category">
            <div className="products-category_icon">
                <img src={`/img/iconoCategory${category.imagen}`} alt={category.name} />
            </div>
            <p>{category.name}</p>
        </div>
    );
}