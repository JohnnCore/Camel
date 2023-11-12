import React from 'react';
import { useParams } from "react-router-dom";

import useProducts from '../../hooks/useProducts';

import CommentsList from '../../components/Products/Comments/CommentsList';

const ProductDetails = () => {
    const { id } = useParams();

    const { retriveOneProduct } = useProducts();
    const { productData, productError, productLoading } = retriveOneProduct(id);




    if (productLoading) {
        return <h1>Loading...</h1>
    }

    if (productError) {
        return <h1>Error...</h1>
    }

    return (
        <div className='product-details-container'>
            <div className="product-details">
                <div className="product-details-image">
                    <img src={"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"} alt={productData.name} />
                </div>
                <div className="product-details-info">
                    <h1 className="product-details-name">{productData.name}</h1>
                    {/* <p className="product-description">{productData.description}</p> */}
                    <p className="product-details-price">${productData.price}</p>
                    <button className="add-to-cart-button-details">Add to Cart</button>
                </div>
            </div>
            <CommentsList id={id}/>
        </div>
    );
};

export default ProductDetails;
