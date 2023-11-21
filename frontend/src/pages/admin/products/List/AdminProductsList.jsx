import React from 'react';
import useProducts from '../../../../hooks/useProducts';

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

    return (
        <table className="table table-hover table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">
                        ID
                    </th>
                    <th scope="col">
                        NAME
                    </th>
                    <th scope="col">
                        PRICE
                    </th>
                    <th scope="col">
                        USER
                    </th>
                    <th scope="col">
                        ACTIONS
                    </th>
                </tr>
            </thead>
            <tbody>
                {productsData.map((data) => {
                    return (
                        <tr key={data.id}>
                            <th className="align-middle">{data.id}</th>
                            <td className="align-middle">{data.name}</td>
                            <td className="align-middle">{data.price}</td>
                            <td className="align-middle">{data.user.username}</td>
                            <td className="align-middle">
                                <a href={`/dashboard/products/${data.id}`} className="btn btn-outline-info" style={{ display: 'block', width:'8vh' }}>VIEW</a>
                                <a onClick={() => sendDelete(data.id)} className="btn btn-outline-danger" style={{ display: 'block', width:'8vh' }}>DELETE</a>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default AdminProductsList;
