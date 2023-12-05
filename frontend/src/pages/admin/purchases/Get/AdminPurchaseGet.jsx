import React, { useReducer, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import usePurchases from "../../../../hooks/usePurchases";
import moment from 'moment-timezone';

import './AdminPurchaseGet.css';

const AdminPurchaseGet = () => {
    const { id } = useParams();
    const { retriveOnePurchase } = usePurchases();

    const { purchaseData, purchaseLoading, purchaseError } = retriveOnePurchase(id);
    console.log(purchaseData);
    if (purchaseLoading) {
        return <h1>Loading...</h1>
    }

    if (purchaseError) {
        return <h1>Error...</h1>
    }

    return (
        <div className="AdminPurchaseGet">
            <div className="details-card">
                <h1>Details Page</h1>
                <p>ID: {purchaseData.id}</p>
                <p>Date: {moment(purchaseData.date).tz('Europe/London').format('YYYY-MM-DD HH:mm:ss')}</p>
                <p>Total: {purchaseData.total}</p>
                <p>User: {purchaseData.user.username}</p>

                <h2>Purchase Products</h2>
                <ul>
                    {purchaseData.purchaseproducts.map((data) => (
                        <li key={data.productId}>
                            <p>Product: {data.product.name}</p>
                            <p>Quantity: {data.quantity}</p>
                            <p>Price: ${data.product.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AdminPurchaseGet;