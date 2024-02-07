

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }) => {
    
    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, quantity: 1 } })

    const itemInCart = inCart ? 'Cart' : null 
     
    const content = (
        <article className="product-card">
            <a href={`/${product.id}`}><img className="product-image" src={"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"} alt={product.name} /></a>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(product.price)}{itemInCart}</p>
            <button className="add-to-cart-button" onClick={onAddToCart}>Add to Cart</button>
        </article>
    )

    return content
}

export default Product;