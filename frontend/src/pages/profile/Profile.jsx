import React from 'react';
import './Profile.css';

import usePurchases from '../../hooks/usePurchases';

const Profile = () => {
    const { retriveUserPurchases } = usePurchases();
    const { userPurchasesData, userPurchasesError, userPurchasesLoading } = retriveUserPurchases(1);

    if (userPurchasesLoading) {
        return <h1>Loading...</h1>;
    }

    if (userPurchasesError) {
        return <h1>Error...</h1>;
    }

    return (
        <div className="purchase-history">
            <h1>Your Purchase History</h1>
            <div className="purchase-list">
                {userPurchasesData.map((data) => (
                    <div key={data.id} className="purchase-item">
                        <div className="purchase-header">
                            <span className="purchase-date">{new Date(data.date).toDateString()}</span>
                            <span className="purchase-amount">{data.total}</span>
                        </div>
                        <ul className="purchase-items">
                            {data.purchaseproducts.map((item) => (
                                <li key={item.product.id}>
                                    <span className="product-name">{item.product.name}</span>
                                    <span className="product-quantity">Quantity: {item.quantity}</span>
                                    <span className="product-price">Price: ${item.product.price}</span>
                                </li>
                            ))}
                        </ul>
                        <a className="view-details-btn">View Details</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
