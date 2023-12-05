import React from 'react';
import usePurchases from '../../../../hooks/usePurchases';
import moment from 'moment-timezone';

import './AdminPurchasesList.css';

const AdminPurchasesList = () => {
    const { retriveAllPurchases } = usePurchases();

    const { purchasesData, purchasesError, purchasesLoading } = retriveAllPurchases();

    if (purchasesLoading) {
        return <div>Loading...</div>;
    }

    if (purchasesError) {
        return <div>Error</div>;
    }

    const sendDelete = (id) => {
        mutate({ id })
    }

    return (
        <div className="AdminPurchasesList">
            <div className="table-card">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>PRICE</th>
                            <th>USER</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchasesData.map((data) => (
                            <tr key={data.id}>
                                <th>{data.id}</th>
                                <td>{moment(data.date).tz('Europe/London').format('YYYY-MM-DD HH:mm:ss')}</td>
                                <td>{data.total}</td>
                                <td>{data.user.username}</td>
                                <td>
                                    <a href={`/dashboard/purchases/${data.id}`}>VIEW</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AdminPurchasesList;
