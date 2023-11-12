import React from 'react';
import { Link } from 'react-router-dom';

import useProducts from '../../hooks/useProducts';

function ListProducts() {
    const { retriveAllProducts } = useProducts();
    const { productsData, productsError, productsLoading } = retriveAllProducts();

    if (productsLoading) {
        return <div>Loading...</div>;
    }

    if (productsError) {
        return <div>Error: {error.message}</div>;
    }
    console.log(productsData);

    return (
        <div className="product-list">
            {productsData.map((product) => {
                return (
                    // <div className="card" style={{ width: '18 rem' }}>
                    //     <img style={{width:'15%'}} src="https://dyl347hiwv3ct.cloudfront.net/app/uploads/2023/09/img-favicon.png" className="card-img-top" alt="..." />
                    //     <div className="card-body">
                    //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    //     </div>
                    //     <div className="card" style={{ width: '18 rem' }}>
                    //         <ul className="list-group list-group-flush">
                    //             <li className="list-group-item">An item</li>
                    //             <li className="list-group-item">A second item</li>
                    //             <li className="list-group-item">A third item</li>
                    //         </ul>
                    //     </div>
                    // </div>
                    <div className="product-card" key={product.id}>
                        <img className="product-image" src={"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"} alt={product.name} />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">5€</p>
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ListProducts;