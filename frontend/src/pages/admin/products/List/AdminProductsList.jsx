import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import './AdminProductsList.css';

const AdminProductsList = () => {
    const { retriveAllProducts, destroyProduct } = useProducts();

    const { productsData, productsError, productsLoading } = retriveAllProducts();
    const { mutate, error } = destroyProduct();

    if (productsLoading) {
        return <div>Loading...</div>;
    }

    if (productsError) {
        return <div>Error</div>;
    }

    const sendDelete = (id) => {
        mutate({id})
    }

    console.log(productsData);

    return (
        <div className="AdminProductsList">
            <a className="new-button" href={`/dashboard/products/create`}>Add New</a>
            <div className="table-card">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>USER</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsData.map((data) => (
                            <tr key={data.id}>
                                <th>{data.id}</th>
                                <th>{data.name}</th>
                                <td>{data.price}</td>
                                <td>{data.username}</td>
                                <td>
                                    <a href={`/dashboard/products/${data.id}`}>EDIT</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AdminProductsList;
